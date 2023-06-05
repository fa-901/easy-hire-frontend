<script setup lang="ts">
import ListingForm from '@/components/ListingForm.vue';
import { data } from '@/models/data';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const editMode = ref(false);
const detail = data.find((x) => x.id === route.params.id);
</script>
<template>
    <div class="flex gap-3">
        <div class="flex-shrink-0 card bg-base-100 shadow-xl w-1/2">
            <div class="card-body">
                <template v-if="!editMode">
                    <div class="border-b py-3 flex justify-between">
                        <div>
                            <b>Title:</b>
                            <div>
                                {{ detail?.title }}
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-primary" @click="editMode = true">Edit</button>
                        </div>
                    </div>
                    <div class="border-b py-3">
                        <b>Description:</b>
                        <div>
                            {{ detail?.description }}
                        </div>
                    </div>
                    <div class="border- py-3">
                        <b>Responsibilities:</b>
                        <ul class="list-disc" v-for="x of detail?.responsibilities" :key="x">
                            <li>{{ x }}</li>
                        </ul>
                    </div>
                    <div class="border-b py-3">
                        <b>Requirements:</b>
                        <ul class="list-disc" v-for="x of detail?.requirements" :key="x">
                            <li>{{ x }}</li>
                        </ul>
                    </div>
                </template>
                <template v-else>
                    <ListingForm :id="detail?.id" />
                </template>
            </div>
        </div>
        <div class="flex-shrink-0 card bg-base-100 shadow-xl w-1/2">
            <div class="card-body">sdfs</div>
        </div>
    </div>
</template>

<style scoped></style>
