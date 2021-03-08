<template>
  <svg
    v-if="iconPath"
    viewBox="0 0 24 24"
    :fill="fill"
    :height="size"
    :width="size"
    class="mdi-icon"
    :style="{ transform: `rotate(${rotate}deg)`, display: 'inline-block' }"
  >
    <path :d="iconPath" />
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({ name: 'AbvIcon' })
export default class extends Vue {
  @Prop({ type: String, default: 'mdi-account' })
  private readonly icon!: string;

  @Prop({ type: [String, Number], default: 24 })
  private readonly size!: string | number;

  @Prop({ type: String, default: 'currentColor' })
  private readonly fill!: string;

  @Prop({ type: Number, default: 0 })
  private readonly rotate!: number;

  private get iconPath(): string | undefined {
    const iconPath = require('@mdi/js')[this.toCamelCase(this.icon)];

    if (iconPath) return iconPath;
    else
      this.$nuxt.error({
        statusCode: 400,
        message: `Icon '${this.icon}' not found`,
      });
  }

  private toCamelCase(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());
  }
}
</script>
