<template>
    <div class="row">
        <div class="col s12">
          <div class="card orange darken-3">
            <div class="card-content white-text">
              <span class="card-title">Furious Defense</span>
              <div class="row">
                <div class="col s6">
                  <button class="btn grey">Attack</button>
                </div>
                <div class="col s6">
                  <button class="btn grey">Attack</button>
                </div>
              </div>
              <p>This skill requires two attack actions, but it does serious damage!</p>
            </div>
            <div class="card-action">
              <button class="btn white-text">Use Skill</button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>