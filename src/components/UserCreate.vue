<template>
  <v-container grid-list-md>
    <v-row align="center" justify="center">
      <v-col class="align-center">
        <v-row class="align-center" justify="center">
          <v-col cols="12" sm="10" md="10" lg="6" class="align-center">
            <v-alert v-if="showMsg === 'error'"
                     dismissible
                     :value="true"
                     type="error"
            >
              Please verify User information.
            </v-alert>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="10" md="10" lg="6" class="align-center">
            <v-card class="login-card">
              <v-card-title>
                <span class="headline">{{pageTitle}}</span>
              </v-card-title>
              <v-spacer/>

              <v-card-text>
                <v-form ref="form" lazy-validation>
                  <v-container>

                    <v-text-field
                    v-model="user.username"
                    label="Name"
                    required
                    />
                    <v-text-field
                    v-model="user.email"
                    label="Email"
                    required
                    />
                    <v-text-field
                    v-model="user.phoneNum"
                    label="Phone Number"
                    required
                    />
                    <v-text-field
                    v-model="user.address"
                    label="Address"
                    required
                    />
                    <v-text-field
                    v-model="user.state"
                    label="State"
                    required
                    />
                    <v-text-field
                    v-model="user.zipcode"
                    label="Zipcode"
                    required
                    />

                </v-container>
                <v-btn v-if="!isUpdate" class="blue white--text" @click="createUser">Save</v-btn>
                <v-btn v-if="isUpdate" class="blue white--text" @click="updateUser">Update</v-btn>
                <v-btn class="white black--text" @click="cancelOperation">Cancel</v-btn>

                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>  
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  import router from '../router';
  import {APIService} from '../http/APIService';
  const apiService = new APIService();
  export default {
    name: 'UserCreate',
    components: {},
    data() {
      return {
        showError: false,
        user: {},
        pageTitle: "Add New User",
        isUpdate: false,
        showMsg: '',
      };
    },
    methods: {
      createUser() {
        apiService.addNewUser(this.user).then(response => {
          if (response.status === 201) {
            this.user = response.data;
             this.showMsg = "";
            router.push('/user-list/new');
          }else{
              this.showMsg = "error";
          }
        }).catch(error => {
          if (error.response.status === 401) {
            router.push("/auth");
          }else if (error.response.status === 400) {
            this.showMsg = "error";
          }
        });
      },
      cancelOperation(){
         router.push("/user-list");
      },
      updateUser() {
        apiService.updateUser(this.user).then(response => {
          if (response.status === 200) {
            this.user = response.data;
            router.push('/user-list/update');
          }else{
              this.showMsg = "error";
          }
        }).catch(error => {
          if (error.response.status === 401) {
            router.push("/auth");
          }else if (error.response.status === 400) {
            this.showMsg = "error";
          }
        });
      }
    },
    mounted() {
      if (this.$route.params.pk) {
        this.pageTitle = "Edit User";
        this.isUpdate = true;
        apiService.getUser(this.$route.params.pk).then(response => {
          this.user = response.data;
        }).catch(error => {
          if (error.response.status === 401) {
            router.push("/auth");
          }
        });
      }
    },
  }
</script>
<style scoped>
  .aform {
    margin-left: auto;
    width: 60%;
  }
</style>