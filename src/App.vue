<template>
  <div class="columns">
            <div class="column is-one-third main-task">
                <nav class="panel has-background-light">
                    <p class="panel-heading has-background-dark has-text-white">
                        Task
                    </p>
                    <div class="panel-block">
                        <p class="control has-icons-left">
                            <input class="input is-small" type="text" placeholder="New Task">
                            <span class="icon is-small is-left">
                                <i class="fas fa-search" aria-hidden="true"></i>
                            </span>
                        </p>
                    </div>
                    <a class="panel-block is-active" style="background-color: #f5f5f5;">
                        <input type="checkbox">
                        Foo
                    </a>
                    <a class="panel-block">
                        <input type="checkbox">
                        Bar
                    </a>
                    <a class="panel-block">
                        <input type="checkbox">
                        Baz
                    </a>
                    <label class="panel-block">
                        <input type="checkbox">
                        Other
                    </label>
                </nav>
            </div>
            <div class="column detail-task">
                <nav class="panel has-background-light">
                    <p class="panel-heading has-background-dark has-text-white">
                        Foo Detail
                    </p>
                    <div class="panel-block">
                        <p class="control has-icons-left">
                            <input class="input is-small" type="text" placeholder="Tittle">
                            <span class="icon is-small is-left">
                                <i class="fas fa-search" aria-hidden="true"></i>
                            </span>
                        </p>
                    </div>
                    <a class="panel-block">
                        <textarea class="textarea" placeholder="Other Details"></textarea>
                    </a>
                    <label class="panel-block">
                        <nav class="panel is-spaced" style="width: 100%">
                            <p class="panel-heading has-background-grey has-text-white">
                                Sub-Tasks
                            </p>
                            <a class="panel-block">
                                <input type="checkbox">
                                Bar
                            </a>
                            <a class="panel-block">
                                <input type="checkbox">
                                Baz
                            </a>
                            <label class="panel-block">
                                <input type="checkbox">
                                Other
                            </label>
                        </nav>
                    </label>
                </nav>
            </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
