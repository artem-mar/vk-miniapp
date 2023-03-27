<template>
  <div class="hero has-background-grey-lighter is-fullheight">
    <section class="hero-head">
      <slot name="header"></slot>
    </section>

    <section class="hero-body is-align-items-start is-justify-content-center pt-2">
      <slot name="main"></slot>
    </section>

    <section class="hero-foot">
      <slot></slot>
    </section>
  </div>
</template>
