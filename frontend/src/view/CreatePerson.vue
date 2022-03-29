<template>
  <div class="row justify-content-center">
    <form-person
      :person="student"
      headline="Create Student"
      action="create"
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

  methods: {
    async handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-student";

      try {
        await fetch(apiURL, {
          method: "POST",
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
