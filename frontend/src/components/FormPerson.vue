<template>
    <div class="col-md-6">
        <h3 class="text-center">{{ headline }}</h3>
        <form @submit.prevent="handleSubmitForm">
            <div v-for="field in FIELDS" :key="field.label" class="form-group mb-2">
                <label>{{ field.label | capitalize }}</label>
                <input v-model="localPerson[field.label]" :type="field.type" class="form-control" required>
            </div>
            <div class="form-group">
                <button class="btn btn-danger btn-block">{{ action | capitalize }}</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        props: {
            headline: { type: String, required: true },
            person: { type: Object, required: true },
            action: { type: String, required: true },
        },
        created() {
            this.FIELDS = [
                { type: 'text', label: 'name' },
                { type: 'email', label: 'email' },
                { type: 'text', label: 'phone' },
            ]
        },

        computed: {
            localPerson: {
                get() {
                    return this.person
                },
                set(localState) {
                    this.$emit('input', localState)
                }
            },
        },

        methods: {
            handleSubmitForm() {
                this.$emit('submit-form')
            }
        },

        filters: {
            capitalize(value) {
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        }
    }
</script>
