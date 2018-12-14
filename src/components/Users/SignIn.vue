<template>
	
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm6 >
			  <v-form v-model="valid">
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
			</v-flex>
		</v-layout>

		<v-layout column wrap>
		  <v-flex xs12 sm6>
		    <v-btn color="success">Sign In</v-btn>
		  </v-flex>
		  <v-flex xs12 sm6>
		    <v-btn color="success">Sign Up</v-btn>
		  </v-flex>
		</v-layout>
	</v-container>

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