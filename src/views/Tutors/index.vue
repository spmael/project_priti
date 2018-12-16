<template>
  <div>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <tutor-list :tutors="tutors"></tutor-list>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import TutorList from "./components/TutorList.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  beforeCreate(){
    firebase.auth().onAuthStateChanged(user =>{
      if (user) {
        console.log(firebase.auth().currentUser)
      }else{
        alert("You need to login to see this page.")
        this.$router.push("/")
      }
    }) 
  },
  name: "Tutors",
  components: {
    TutorList
  },
  computed: {
    ...mapGetters({
      tutors: "tutors/ALL_TUTORS"
    })
  },
  created() {
    this.fetchTutors();
  },
  methods: {
    ...mapActions({
      fetchTutors: "tutors/FETCH_TUTORS"
    })
  }
 
};
import firebase from "firebase";

</script>
