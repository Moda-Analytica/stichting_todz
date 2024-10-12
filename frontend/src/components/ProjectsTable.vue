<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const products = [
    { 
        name: 'Back to school for Children',
        description: 'Project Back to school is focused on alleviating the pains of parents who cannot aford eduction for their children in Africa.',
        status: 'In progress',
        category: 'Children Support',
        start_date: 'July 12, 2024',
        funded_by: 'Throne of David, Zoetermeer',
        image: '/image-10.jpg',
        direct_impact: '20 people',
        end_date: ''
    },
    { 
        name: 'Rescue the nation',
        description: 'Rescue the nation is a orientational shift in foundational issues nationwide',
        status: 'Completed',
        category: 'People support',
        funded_by: 'Throne of David, Zoetermeer',
        start_date: 'August 12, 2024',
        image: '/image-13.jpg',
        direct_impact: '20 people',
        end_date: 'October 10, 2024',
    },
]
</script>

<template>
  <div class="flex items-center ml-8">
    <DataTable :value="products" tableStyle="min-width: 100rem">
        <template #header>
            <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-xl font-bold">Projects</span>
                <Button icon="pi pi-refresh" rounded raised />
            </div>
        </template>
        <Column field="name" header="Name"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="category" header="Category"></Column>
        <Column header="Image">
            <template #body="slotProps">
                <img :src="slotProps.data.image" :alt="slotProps.data.image" class="w-24 rounded" />
            </template>
        </Column>
        <Column field="start_date" header="Start Date"></Column>
        <Column field="status" header="Status"></Column>
        <Column field="funded_by" header="Funded By"></Column>
        <Column field="direct_impact" header="Direct Impact"></Column>
        <Column field="end_date" header="End Date"></Column>
    </DataTable>
  </div>
</template>
