<template>
	
	<div
		style="max-width: 600px; margin: auto;"
    	class="grey lighten-3">

    	<v-toolbar dark color="indigo lighten-2" class="mt-4" >
    	  <h2>SIGN IN</h2>
    	</v-toolbar>

    	<v-card>
    	  <v-container
    	  	fluid
        	grid-list-lg>
	    	  <div>
	    	  	<v-form 
	    	  		v-model="valid">
				    <v-text-field
				      v-model="email"
				      :rules="emailRules"
				      label="E-mail"
				      required
				    ></v-text-field>
				    <v-text-field
				      v-model="password"
				      :rules="passwordRules"
				      :counter="10"
				      label="Password"
				      required
							input type="password" id="myInput"
				    ></v-text-field>
				 </v-form>
	    	  </div>
				

			<v-layout column wrap>
				
			  <v-flex xs12 sm6 v-on:click="goToAccountRecovery()">
					<!-- *+ Add color -->  
					<p class="text-xs-right"><u>Did you forget your email or password?</u></p>
			  </v-flex>
			  <v-flex xs12 sm6>		
			    <v-btn color="success" v-on:click="SignIn">Sign In</v-btn>
			  </v-flex>
			  <v-flex xs12 sm6>
					Are you new here? <br>
			    <v-btn color="success">Sign Up</v-btn>
			  </v-flex>
			</v-layout>
    	  </v-container>
    	</v-card>
		
	</div>
		

</template>

<script>
import firebase from "firebase";
  export default {
    data: () => ({
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 10 || 'Password must be less than 10 characters'
			],
			  name:"SignIn",
  data(){
    return{
      email:null,
      passward: null
    }
  },

    }),
	  methods: {
			 SignIn: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
			user =>{
					alert('Success!')
					this.$router.push('tutor/1/my_courses')
					},
				err =>{
					alert(err.message)
				}
			)
		}
		},
	

			goToAccountRecovery: function (){
				//*+ Add form for email input
				console.log()
				this.$router.push('/account_recovery');
			function myFunction() {
				var x = document.getElementById("myInput");
				if (x.type === "password") {
				x.type = "text";
				} else {
				x.type = "password";
				}
			}
			}}	;
</script>