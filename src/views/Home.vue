
<template>
	<v-container         
		fluid
		grid-list-md
        >
		<v-layout row wrap justify-center>
			<v-flex xs6>
				<v-card >
					<v-card-title>
						<h1> Are you a student in an international school?</h1>
					</v-card-title>
					<v-flex xs4>
					<v-layout>
					<v-card>
						<v-card-title class="headline"> A wide international community of tutors!
						</v-card-title>
						<v-card-media width="100%">
							<v-carousel hide-controls hide-delimiters height="200px">
								<v-carousel-item
								v-for="tutor in promotedTutors"
								:src="tutor.imageUrl" 
								:key="tutor.id">
								</v-carousel-item>	         
						</v-carousel>
						</v-card-media>
					</v-card>		
					</v-layout>
					</v-flex>	
				</v-card>
			</v-flex>
	<v-flex xs6>
		<v-card color="cyan darken-2" class="white--text ext-xs-center" height="370px">
			<v-card-title>
				Try PriTi~!
			</v-card-title>
			<v-card-text>
				PriTi is the service that you always needed!
				We will help you find a foreign Private Tutor, able to teach you using their native language.
				You can explore your options based on location, price and time availability. 
				You can also request a tutor for a specific course.
			</v-card-text>
			<v-card-actions>
				<v-btn dark large justify="justify-right" router to="/tutors" color="success">Explore promoted Courses</v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
	<v-flex xs6>
		<v-carousel>
			<v-carousel-item
			v-for="course in promotedCourses"
			:src="course.imageUrl"
			:key="course.id">
			<v-flex xs12 >
				<v-btn color="indigo" v-on:click="goToCoursesPage(course.name)">								
				{{ course.title }}
				</v-btn>
			</v-flex>
			</v-carousel-item>	         
		</v-carousel>
	</v-flex>		

	  </v-layout>
	</v-container>
</template>

<script>
import Slick from 'vue-slick';

	export default {
		data: () =>({
			slickOptions: {
					//options can be used from the plugin documentation
                        slidesToShow: 2,
						infinite: true,
						slidesPerRow: 2,
						autoplay: true,
                        accessibility: true,
                        adaptiveHeight: false,
						arrows: true,
					　　 prevArrow:'<div class="prev">PREV</div>',
　　					 nextArrow:'<div class="next">NEXT</div>',
						dots: true,
                        draggable: false,
						edgeFriction: 0.30,
						centerMode: true,
                        swipe: false
			},
			promotedCourses: [
					{ imageUrl:'http://www.mrbartonmaths.com/blog/wp-content/uploads/2017/06/june.png', id:'wda',title:'Courses in Biology', name: "biology"},
					{ imageUrl:'https://www.insidescience.org/sites/default/files/sites/default/files/images/articles/top-images/2018/physics-chalkboard_cropped.jpg', id:'wdwd',title:'Courses in mathematics', name:"mathematics"}
				],
				promotedTutors: [
					{
						id:1,
						name: "Michael",
						imageUrl: "https://i.imgur.com/jJVDi0G.jpg" 
					},
					{
						id:2,
						name: "Yulia",
						imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIXDFOqEC6RWIQJ2j9aOEavfQeRb1U9xtt4Z5O6-WFGDoA-bxRw" 
					},
					{
						id:3,
						name: "Chen",
						imageUrl: "http://image2.sina.com.cn/ent/d/2001-07-31/28-3-52024_09.jpg" 
					},
				]
		}),
		components: { Slick },
	  methods: {
			goToCoursesPage: function (courseName){
				console.log()
				this.$router.push('/promotedCourses/' + courseName);
			},
			next() {
				this.$refs.slick.next()
			},
			prev() {
				this.$refs.slick.prev()
			},
			reInit() {
				
				this.$refs.slick.reSlick()
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
