<template>
  <div class="row justify-content-center">
    <form-person
      :person="student"
      action="update"
      headline="Update Student"
      @submit-form="handleSubmitForm"
    />
  </div>
</template>

<script>
import FormPerson from "@/components/FormPerson";

export default {
  components: {
    FormPerson,
  },

  data() {
    return {
      student: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },

  created() {
    this.getStudent();
  },

  methods: {
    async getStudent() {
      let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;

      try {
        const response = await fetch(apiURL);

        this.student = await response.json();
      } catch (error) {
        console.error(error);
      }
    },

    async handleSubmitForm() {
      let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;

      try {
        await fetch(apiURL, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.student),
        });

        await this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
