<template>
  <header
    :class="{ '-translate-y-full': !showNavbar }"
    class="abv-header transition-transform transform-gpu translate-y-0 duration-500 ease-in-out fixed inset-x-0 flex flex-row justify-between items-center shadow-lg p-4 space-x-4"
  >
    <AbvIcon icon="mdi-menu" color="white" />
    <div
      class="abv-header-logo bg-bud-logo bg-contain bg-center bg-no-repeat self-stretch w-full"
    />
    <AbvIcon icon="mdi-qrcode-scan" color="white" />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({ name: 'AbvHeader' })
export default class extends Vue {
  private showNavbar = true;
  private lastScrollPosition = 0;

  private mounted(): void {
    addEventListener('scroll', this.onScroll);
  }

  private beforeDestroy(): void {
    removeEventListener('scroll', this.onScroll);
  }

  private onScroll(): void {
    const currentScrollPosition =
      pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition < 0) return;
    if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) return;

    this.showNavbar = currentScrollPosition < this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
  }
}
</script>
