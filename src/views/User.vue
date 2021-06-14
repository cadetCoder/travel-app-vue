<template>
  <div>
    <h1>Welcome {{ user }}</h1>
    <p>
      <router-link
        :to="{
          name: 'invoices',
        }"
      >
        Invoices
      </router-link>
    </p>
  </div>
</template>
