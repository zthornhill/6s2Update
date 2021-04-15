<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col align="center" justify="center" cols="12">
          <blockquote>
            &#8220;Welcome {{validUserName}}!&#8221;
          </blockquote>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col 
          cols="12"
            sm="10"
            md="10"
        >
            <v-container
              fluid
            >
              <v-row>
                <v-col>
                  <v-card>
                    <v-img
                      :src="require('@/assets/images/download.png')" align center height="200px">
                    </v-img>
                  </v-card>
                </v-col>                
                <v-col>
                 <v-card>
                    <v-img
                      :src="require('@/assets/images/SubAlert.png')" align center height="200px">
                    </v-img>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card>
                     <v-img
                      :src="require('@/assets/images/Netflix.jpg')" height="200px">
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
         
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import router from '../router';
  export default {
    name: 'Home',
    data: () => ({
      validUserName: "Guest"
    }),
    mounted() {
      this.getUser();
    },
    methods: {
      viewUsers() {
        router.push('/user-list');
      },
      viewSubscriptions() {
        router.push('/subscription-list');
      },
      Payment() {
        router.push('/payment');
      },
       Register() {
        router.push('/register');
      },
      
      getUser() {
        if (localStorage.getItem("isAuthenticates")
          && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
          this.validUserName = JSON.parse(localStorage.getItem("log_user"));
        }
      }
    }
  }
  
  
</script>

<style scoped>

row{
  backgroundColor: black
}