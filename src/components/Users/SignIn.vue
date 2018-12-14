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
				    ></v-text-field>
				 </v-form>
	    	  </div>
				

			<v-layout column wrap>
			  <v-flex xs12 sm6>
			    Password forgotten?
			  </v-flex>
			  <v-flex xs12 sm6>
			    <v-btn color="success">Sign In</v-btn>
			  </v-flex>
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
    })
  }
</script>