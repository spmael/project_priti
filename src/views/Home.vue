<template>
	<v-container>
	  <v-layout row wrap class="mb-2">
	    <v-flex xs12 sm6 class="text-xs-center text-sm-right">
	      <v-btn dark large router to="/courses" color="success">Explore courses</v-btn>
	    </v-flex>
	    <v-flex xs12 sm6 class="text-xs-center text-sm-left">
	       <v-btn dark large router to="/courses/new" color="indigo lighten-3">Create a course</v-btn>
	    </v-flex>
	  </v-layout>
	  <v-layout row wrap>
	    <v-flex xs12>
	      <v-carousel>
	        <v-carousel-item
	          v-for="course in courses"
	          :src="course.imageUrl"
	          :key="course.id">
						<v-flex xs12 v-on:click="goToTutorsPage()">
							<div class="title"> 								
								{{ course.title }}
							</div>
						</v-flex>
	          </v-carousel-item>	         
	      </v-carousel>
	    </v-flex>
	  </v-layout>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				courses: [
					{ imageUrl:'http://www.mrbartonmaths.com/blog/wp-content/uploads/2017/06/june.png', id:'wda',title:'Courses in Maths'},
					{ imageUrl:'https://www.insidescience.org/sites/default/files/sites/default/files/images/articles/top-images/2018/physics-chalkboard_cropped.jpg', id:'wdwd',title:'Courses in Physics'}
				]
			}
		},
	  methods: {
			goToTutorsPage: function (){
				console.log()
				this.$router.push('/tutors');

			}
		}
	}

</script>

<style scoped>
	.title {
		position: absolute;
		bottom: 50px;
		background-color: rgba(0,0,0,0.5);
		color: white;
		font-size: 2em;
		text-align: center

	}
</style>
