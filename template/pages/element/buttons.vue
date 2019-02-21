<template lang="html">
  <section class="element">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="card-title">
              Button
            </div>

            <el-button>
              Default
            </el-button>
            <el-button type="primary">
              Primary
            </el-button>
            <el-button type="success">
              Success
            </el-button>
            <el-button type="info">
              Info
            </el-button>
            <el-button type="warning">
              Warning
            </el-button>
            <el-button type="danger">
              Danger
            </el-button>

            <br><br>

            <el-button plain>
              Plain
            </el-button>
            <el-button
              type="primary"
              plain
            >
              Primary
            </el-button>
            <el-button
              type="success"
              plain
            >
              Success
            </el-button>
            <el-button
              type="info"
              plain
            >
              Info
            </el-button>
            <el-button
              type="warning"
              plain
            >
              Warning
            </el-button>
            <el-button
              type="danger"
              plain
            >
              Danger
            </el-button>

            <br><br>

            <el-button round>
              Round
            </el-button>
            <el-button
              type="primary"
              round
            >
              Primary
            </el-button>
            <el-button
              type="success"
              round
            >
              Success
            </el-button>
            <el-button
              type="info"
              round
            >
              Info
            </el-button>
            <el-button
              type="warning"
              round
            >
              Warning
            </el-button>
            <el-button
              type="danger"
              round
            >
              Danger
            </el-button>

            <br><br>

            <el-button
              icon="el-icon-search"
              circle
            />
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
            />
            <el-button
              type="success"
              icon="el-icon-check"
              circle
            />
            <el-button
              type="info"
              icon="el-icon-message"
              circle
            />
            <el-button
              type="warning"
              icon="el-icon-star-off"
              circle
            />
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
            />
          </div>
        </div>
        <br>
        <p>Another component of Element UI can you see on the <a href="https://element.eleme.io/#/en-US/component/installation">official website.</a></p>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'Element',
  data () {
    return {
      text: '',
      selected: true,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: {'C': '3PO'}, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      GenderSelect: [
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' }
      ],
      Category: [
        { value: 'a', text: 'Category 1' },
        { value: 'b', text: 'Category 2' },
        { value: 'c', text: 'Category 3' },
        { value: 'd', text: 'Category 4' },
        { value: 'e', text: 'Category 5' }
      ],
      countries: [
        { value: 'America', text: 'America' },
        { value: 'Italy', text: 'Italy' },
        { value: 'Russia', text: 'Russia' },
        { value: 'China', text: 'China' },
        { value: 'Britain', text: 'Britain' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.element {
}
</style>
