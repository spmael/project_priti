 <template>
  <v-card v-if="currentStudent">
	  <v-container
    fluid
    grid-list-md>
      <v-layout row wrap>
      <v-flex xs6  v-for="course in myCourses()" v-bind:key="course.name">
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{course.name}}</div>
                    <div >{{course.price}}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn  dark>Change</v-btn>
                </v-card-actions>
              </v-card>
      </v-flex>

		<v-flex xs12>
      <v-btn dark large router to="/tutors/" color="indigo lighten-3">Find more courses</v-btn>
		</v-flex>

    </v-layout>
	</v-container>
	</v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


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
        ]
    }),
  name: "CurrentCourses",
  props: {
    studentId: {
      required: true,
      type: String
    }
  },
  computed: {
    ...mapGetters({
      student: "students/STUDENT"
    }),
    currentStudent() {
      return this.student(this.studentId);
    }
  },
  created() {
    this.fetchStudent(this.studentId);
  },
    components: {
  }, 
  methods: {
    ...mapActions({
      fetchStudent: "students/FETCH_STUDENT"
    }),
		myCourses() {
			return this.student(this.studentId).courses;
		}
  }
};
</script>

<style scoped lang="scss">
</style>
