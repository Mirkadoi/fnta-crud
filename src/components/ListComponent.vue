<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="student in students" :key="student._id">
                    <td>{{ student.name }}</td>
                    <td>{{ student.email }}</td>
                    <td>{{ student.phone }}</td>
                    <td>
                        <router-link :to="{name: 'edit', params: { id: student._id }}" class="btn btn-success">Edit
                        </router-link>
                        <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                students: []
            }
        },
        created() {
            this.getStudents()
        },
        methods: {
            async getStudents() {
                const apiURL = 'http://localhost:4000/api';

                try {
                    const response = await fetch(apiURL);

                    this.students = await response.json();
                }catch (error) {
                    console.error(error)
                }
            },

            async deleteStudent(id){
                let apiURL = `http://localhost:4000/api/delete-student/${id}`;

                if (window.confirm("Do you really want to delete?")) {

                    try {
                        await fetch(apiURL, { method: 'DELETE'});
                        await this.getStudents()
                    }catch (error) {
                        console.error(error)
                    }
                }
            }
        }
    }
</script>
<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
