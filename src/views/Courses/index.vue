<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <available-tutor-list :tutors="availableTutors"></available-tutor-list>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import AvailableTutorList from "./components/AvailableTutorList.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    course : "biology"
  }),
  name: "AvailableTutors",
  components: {
    AvailableTutorList
  },
  computed: {
    ...mapGetters({
      tutors: "tutors/ALL_TUTORS"
    }),
    availableTutors: function(){
      

      if(this.tutors){
      return this.tutors.filter( (tutor) =>
      {
        for(var i = 0; i < tutor.courses.length; i++) {
          if (tutor.courses[i].name == this.course)
            return true;
        }
        return false;
      });
      }else{
        return []
      }
    }
  },
  created() {
    this.fetchTutors();
  },
  methods: {
    ...mapActions({
      fetchTutors: "tutors/FETCH_TUTORS"
    }),    
  }
};


</script>
