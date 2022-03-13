<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">{{ formOptions.headline }}</h3>
            <form @submit.prevent="formOptions.submitEvent">
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
                    <button class="btn btn-danger btn-block">{{ formOptions.submitName }}</button>
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
        computed: {
            isEditMode() {
                return !!this.$route.params.id
            },
            formOptions() {
                const createOptions = {headline: 'Create Student', submitName: 'Create', submitEvent: this.handleCreateForm}
                const updateOptions = {headline: 'Update Student', submitName: 'Update', submitEvent: this.handleUpdateForm}

                return this.isEditMode ? updateOptions : createOptions
            }
        },
        created() {
            if (this.isEditMode) this.getStudent();
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

            async handleCreateForm() {
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

                    await this.$router.push('/')
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

                    await this.$router.push('/')
                }catch (error) {
                    console.error(error)
                }
            }
        }
    }
</script>
