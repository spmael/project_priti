<template>
	<div
		style="max-width: 600px; margin: auto;"
    	class="grey lighten-3">

    	<v-toolbar dark color="indigo lighten-2" class="mt-4" >
    	  <h2>SIGN UP</h2>
    	</v-toolbar>

    	<v-card>
    	  <v-container
    	  	fluid
        	grid-list-lg>
	    	  <div>
	    	  	<v-form 
	    	  		v-model="valid">
	    	  		<v-text-field
				      v-model="name"
				      :rules="nameRules"
				      label="Name"
				      required
				    ></v-text-field>
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
				    <v-text-field
				      v-model="confirmPassword"
				      :rules="passwordRules"
				      :counter="10"
				      label="Confirm Password"
				      required
							input type="password"  id="retypePassword"
				    ></v-text-field>
						<v-checkbox type="checkbox" onclick="showPassword()">Show Password</v-checkbox>					
				 </v-form>
				 <v-select
		          :items="items"
		          label="Use as">     	
		         </v-select>
		         <v-checkbox label="I agree with the condition terms"></v-checkbox>
	    	  </div>
				

			<v-layout column wrap>
			  <v-flex xs12 sm6>
			    <v-btn color="success">Sign Up</v-btn>
			  </v-flex>
			</v-layout>
    	  </v-container>
    	</v-card>
		
	</div>

</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => /.+@.+/.test(v) || 'Name must be valid'
      ],
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
      confirmPassword:'',
      items: ['','Student', 'Teacher'],
     

		}),
	  methods: {
			showPassword: function() {
					var x = document.getElementById("retypePassword");
					if (x.type === "password") {
					x.type = "text";
					} else {
					x.type = "password";
					}
				}
			}
  }
</script>