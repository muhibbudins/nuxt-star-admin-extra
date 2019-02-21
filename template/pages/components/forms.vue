<template lang="html">
  <section class="forms">
    <div class="row">
      <div class="col-md-6 d-flex align-items-stretch grid-margin">
        <div class="row flex-grow">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">
                  Default form
                </h4>
                <p class="card-description">
                  Basic form layout
                </p>
                <form class="forms-sample">
                  <b-form-group label="Email" label-for="input1">
                    <b-form-input id="input1" type="email" placeholder="Email address" />
                  </b-form-group>
                  <b-form-group label="Password" label-for="input2">
                    <b-form-input id="input2" type="password" placeholder="Password" />
                  </b-form-group>
                  <b-button type="submit" variant="success" class="mr-2">
                    Submit
                  </b-button>
                  <b-button variant="light">
                    Cancel
                  </b-button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">
                  Horizontal Form
                </h4>
                <p class="card-description">
                  Horizontal form layout
                </p>
                <form class="forms-sample">
                  <form class="forms-sample">
                    <b-form-group label="Email" label-for="input3">
                      <b-form-input id="input3" type="email" placeholder="Email address" />
                    </b-form-group>
                    <b-form-group label="Password" label-for="input4">
                      <b-form-input id="input4" type="password" placeholder="Password" />
                    </b-form-group>
                    <b-button type="submit" variant="success" class="mr-2">
                      Submit
                    </b-button>
                    <b-button variant="light">
                      Cancel
                    </b-button>
                  </form>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              Basic form
            </h4>
            <p class="card-description">
              Basic form elements
            </p>
            <form class="forms-sample">
              <b-form-group label="Name" label-for="input5">
                <b-form-input id="input5" type="text" placeholder="Name" />
              </b-form-group>
              <b-form-group label="Email address" label-for="input6">
                <b-form-input id="input6" type="email" placeholder="Email" />
              </b-form-group>
              <b-form-group label="Password" label-for="input7">
                <b-form-input id="input7" type="password" placeholder="Password" />
              </b-form-group>
              <b-form-group label="City" label-for="input9">
                <b-form-input id="input9" type="text" placeholder="Location" />
              </b-form-group>
              <b-form-group label="Message" label-for="input10">
                <b-form-textarea id="input10" v-model="text" placeholder="Message" :rows="3" :max-rows="6" />
              </b-form-group>
              <b-button type="submit" variant="success" class="mr-2">
                Submit
              </b-button>
              <b-button variant="light">
                Cancel
              </b-button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-5 d-flex align-items-stretch">
        <div class="row flex-grow">
          <div class="col-12 grid-margin">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">
                  Basic input groups
                </h4>
                <p class="card-description">
                  Basic bootstrap input groups
                </p>
                <b-form-group>
                  <b-input-group prepend="@">
                    <b-form-input placeholder="Username" />
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group append="@">
                    <b-form-input placeholder="Username" />
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group prepend="$" append=".00">
                    <b-form-input />
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend">
                      <span>$</span>
                    </b-input-group-text>
                    <b-input-group-text slot="prepend">
                      <span>00.0</span>
                    </b-input-group-text>
                    <b-form-input type="text" placeholder="Enter Amount" />
                  </b-input-group>
                </b-form-group>
              </div>
            </div>
          </div>
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">
                  Colored input groups
                </h4>
                <p class="card-description">
                  Input groups with colors
                </p>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend" class="bg-info text-white">
                      <span>@</span>
                    </b-input-group-text>
                    <b-form-input placeholder="Username" />
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-form-input placeholder="Username" />
                    <b-input-group-text slot="append" class="bg-info text-white">
                      <span>@</span>
                    </b-input-group-text>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend" class="bg-info text-white">
                      <span>$</span>
                    </b-input-group-text>
                    <b-form-input />
                    <b-input-group-text slot="append" class="bg-info text-white">
                      <span>.00</span>
                    </b-input-group-text>
                  </b-input-group>
                </b-form-group>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-text slot="prepend" class="bg-secondary text-primary">
                      <span>$</span>
                    </b-input-group-text>
                    <b-input-group-text slot="prepend" class="bg-secondary text-primary">
                      <span>00.0</span>
                    </b-input-group-text>
                    <b-form-input type="text" placeholder="Enter Amount" />
                  </b-input-group>
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              Input size
            </h4>
            <p class="card-description">
              This is the default bootstrap form layout
            </p>
            <b-form-group label="Large Input" label-for="input11">
              <b-form-input id="input11" type="text" placeholder="Username" size="lg" />
            </b-form-group>
            <b-form-group label="Default Input" label-for="input11">
              <b-form-input id="input11" type="text" placeholder="Username" />
            </b-form-group>
            <b-form-group label="Small Input" label-for="input11">
              <b-form-input id="input11" type="text" placeholder="Username" size="sm" />
            </b-form-group>
          </div>
          <div class="card-body">
            <h4 class="card-title">
              Selectize
            </h4>
            <b-form-group label="Small Input" label-for="input11">
              <b-form-select v-model="selected" :options="options" size="sm" />
            </b-form-group>
            <b-form-group label="Default Input" label-for="input11">
              <b-form-select v-model="selected" :options="options" />
            </b-form-group>
            <b-form-group label="Large Input" label-for="input11">
              <b-form-select v-model="selected" :options="options" size="lg" />
            </b-form-group>
          </div>
        </div>
      </div>
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              Horizontal Two column
            </h4>
            <form class="form-sample">
              <p class="card-description">
                <strong>Personal info</strong>
              </p>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group label="Name" description="First Name" label-for="input14">
                    <b-form-input id="input14" type="text" />
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group description="Last Name">
                    <b-form-input type="text" />
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group label="Gender" description="Male,Female">
                    <b-form-select v-model="selected" :options="GenderSelect" placeholder="Select Gender" />
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group label="Date of birth" description="DD/MM/YYYY">
                    <b-form-input />
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group label="Category">
                    <b-form-select v-model="selected" :options="Category" placeholder="Select Gender" />
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group label="Membership">
                    <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent">
                      <b-form-radio value="Free">
                        Free
                      </b-form-radio>
                      <b-form-radio value="Professional">
                        Professional
                      </b-form-radio>
                    </b-form-radio-group>
                  </b-form-group>
                </div>
              </div>
              <p class="card-description">
                <strong>Address</strong>
              </p>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group label="Address 1" label-for="input15">
                    <b-form-input id="input15" type="text" />
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group label="State" label-for="input16">
                    <b-form-input id="input16" type="text" />
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group label="Address 2" label-for="input17">
                    <b-form-input id="input17" type="text" />
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group label="Pincode" label-for="input18">
                    <b-form-input id="input18" type="text" />
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <b-form-group label="City" label-for="input19">
                    <b-form-input id="input19" type="text" />
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group label="Country">
                    <b-form-select v-model="selected" :options="countries" />
                  </b-form-group>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'Forms',
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
