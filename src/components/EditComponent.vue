<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Student</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="student.name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="student.email" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="student.phone" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                student: { }
            }
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
                }catch (error) {
                    console.error(error)
                }
            },

            async handleUpdateForm() {
                let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;

                try {
                    await fetch(apiURL, {
                        method: 'PUT',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.student)
                    });

                    await this.$router.push('/view')
                }catch (error) {
                    console.error(error)
                }
            }
        }
    }
</script>
