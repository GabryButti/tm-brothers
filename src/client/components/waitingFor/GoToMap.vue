<template>
  <span class="gotomap_cont">
    &nbsp;&nbsp;<span @click="onclick" v-i18n>go to map</span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue';
import {SelectSpaceModel} from '@/common/models/PlayerInputModel';
import {isMarsSpace} from '@/common/boards/spaces';

export default Vue.extend({
  name: 'GoToMap',
  props: {
    playerinput: {
      type: Object as () => SelectSpaceModel,
    },
  },
  methods: {
    onclick(event: MouseEvent) {
      const id = isMarsSpace(this.playerinput.spaces?.[0] ?? '00') ? 'shortkey-board' : 'shortkey-moonBoard';
      const el = document.getElementById(id);
      if (el) {
        event.preventDefault();
        el.scrollIntoView({block: 'center', inline: 'center', behavior: 'auto'});
      }
    },
  },
});

</script>
