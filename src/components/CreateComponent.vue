<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Student</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Name</label>
                    <input v-model="student.name" class="form-control" required type="text">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input v-model="student.email" class="form-control" required type="email">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input v-model="student.phone" class="form-control" required type="text">
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                student: {
                    name: '',
                    email: '',
                    phone: ''
                }
            }
        },
        methods: {
            async handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-student';

                try {
                    await fetch(apiURL, {
                        method: 'POST',
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
