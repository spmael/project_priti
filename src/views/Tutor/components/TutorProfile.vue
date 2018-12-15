<template>
    <v-container>
      <v-card v-if="currentTutor">
        <v-layout row wrap>
          <v-flex xs3>
          <!---*+ move to center-->

            <v-card>
              <v-img
                :src="currentTutor.image"
                width="100%"
              >
                <v-container
                  fill-height
                  fluid
                  pa-2
                >
                <v-layout              
                  column
                  fill-height>
                  <v-spacer></v-spacer>
                  <v-flex xs12 align-end flexbox>
                    <v-card-title class="white--text pl-5 pt-5">
                      <div class="display-1 pl-5 pt-5">{{ currentTutor.name }}</div>
                      <div class="dtext-xs-center"><v-rating v-model="rating"></v-rating></div>
                    </v-card-title>  
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>

            <v-card-actions>
              <v-layout column>
                <div v-for="course in courses()" v-bind:key="course.name">
                  <v-icon>local_library</v-icon>{{course.name}} <v-icon>money</v-icon>{{course.price}}             
                  <v-btn icon>
                    <v-icon>add_circle</v-icon>
                  </v-btn>
                </div>
              </v-layout>
            </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs3> 
            <v-card-text>
              <div>
                <div><v-icon>map</v-icon>{{currentTutor.country}}</div>
                <div><v-icon>language</v-icon>{{currentTutor.nativeLanguage}}</div>
                <div><v-icon>school</v-icon>{{currentTutor.affiliation}}</div>
                <div><v-icon>mail</v-icon>{{currentTutor.email}}</div>
              </div>
            </v-card-text>
          </v-flex>

          <v-flex xs6>
            <v-card>
              <v-card-title>
                <p class="headline">Location</p>                              
              </v-card-title>            
              <v-divider></v-divider>
            <static-map :google-api-key="apiKey"
              :language="language" v-on:get-url="getUrl"
              :format="format" :markers="locationMarkers" :zoom="zoom" :center="center"
              :size="size" :type="type"></static-map>         
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card>
              <v-card-title>
                <p class="headline">Tutor Bio</p>                              
              </v-card-title>            
              <v-divider></v-divider>
              <p class="text-justify">{{currentTutor.bio}}</p>
            </v-card>
          </v-flex>

          <v-flex xs6>
            <v-card>
              <v-card-title>
                <p class="headline">Class Availability</p>                              
              </v-card-title>            
              <v-divider></v-divider>
              <v-data-table
                :headers="headers"
                :items="currentTutor.availability"
                class="elevation-1"
                >
                <template slot="items" slot-scope="props">
                <td>{{ props.item.timeslot }}</td>
                <td class="text-xs-right">{{ props.item.monday }}</td>
                <td class="text-xs-right">{{ props.item.tuesday }}</td>
                <td class="text-xs-right">{{ props.item.wednesday}}</td>
                <td class="text-xs-right">{{ props.item.thursday }}</td>
                <td class="text-xs-right">{{ props.item.friday }}</td>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>

        </v-layout>
      </v-card>
    </v-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import StaticMap from '@/components/StaticMap.vue';

function getUrl(url) {
	this.url = url;
}

export default {
      data: () => ({
      rating: 5, 
      headers: [
          {
            text: 'Time Slot',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Mon', value: 'monday' },
          { text: 'Tue', value: 'tuesday' },
          { text: 'Wed', value: 'wednesday' },
          { text: 'Thu', value: 'thursday' },
          { text: 'Fri', value: 'friday' }
        ],
      apiKey: 'AIzaSyBNzPxDEDzlMCA9cedItIPCwtbdk037BGg',
			center: 'Brooklyn+Bridge,New+York,NY',
			format: 'gif',
			language: 'ja',
			markers: [
				{
					label: 'W',
					color: 'blue',
					lat: 40.702147,
					lng: -74.015794,
					size: 'normal',
				},
			],
			scale: '1',
			size: [800, 400],
			type: 'roadmap',
			url: '',
			zoom: 13
       } ),
  name: "TutorProfile",
  props: {
    tutorId: {
      required: true,
      type: String
    }
  },
  computed: {
    ...mapGetters({
      tutor: "tutors/TUTOR"
    }),
    currentTutor() {
      return this.tutor(this.tutorId);
    },
    tutorImage() {
      return this.tutor.image ? this.tutor.image : "https://stmichaelsknightsofcolumbus.com/wordpress/wp-content/uploads/2013/08/Photo-not-available.jpg";
    }
  },
  created() {
    this.fetchTutor(this.tutorId);
  },
  components: {
    StaticMap,
  }, 
  methods: {
    ...mapActions({
      fetchTutor: "tutors/FETCH_TUTOR"
    }), 
    courses: function () {
      return this.tutor(this.tutorId).courses;
    },
    locations: function() {
      return this.tutor(this.tutorId).locations;
    },
    locationMarkers: function() {
      var locs = locations();
      var i = 1;
      var mks = [];
      for (i=0;i<=locs.length;i++)
      {
        mks.push(
          {
            label: locs(i).name,
            color: 'blue',
            lat: locs(i).lat,
            lng: locs(i).lng,
            size: 'normal',
				  }
        );
      }
      console.log(mks)
      return mks;
    },
		getUrl,
  }
};
</script>

<style scoped lang="scss">
</style>
