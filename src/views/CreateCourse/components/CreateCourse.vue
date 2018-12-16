<template>
 <v-form v-if="currentTutor"> 
    <v-container>
				 <v-flex xs12>
		 <h1>{{currentTutor.name}}</h1>
	 </v-flex>

      <v-layout row wrap>
				<v-flex xs4>
					<v-text-field
					label="course name"
					></v-text-field>
				</v-flex>
				<v-flex xs4>
					<v-text-field
						label="¥price/hour"
					></v-text-field>
				</v-flex>
				<v-flex xs4>
					<v-text-field
						label="location"
					></v-text-field>
				</v-flex>

		<v-flex xs12>
			<v-data-table
			:headers="headers"
			:items="currentTutor.availability"
			class="elevation-1"
			>
			<template slot="items" slot-scope="props">
			<td>{{ props.item.timeslot }}</td>
    <td><v-checkbox v-model="props.item.monday"></v-checkbox></td>
    <td><v-checkbox v-model="props.item.tuesday"></v-checkbox></td>
		<td><v-checkbox v-model="props.item.wednesday"></v-checkbox></td>
    <td><v-checkbox v-model="props.item.thursday"></v-checkbox></td>
    <td><v-checkbox v-model="props.item.friday"></v-checkbox></td>
			</template>
			</v-data-table>
		</v-flex>
		 <v-btn>Up date
		 </v-btn>
	 </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default{
	data: () => (
		{
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

		}
	), 
	name: "CreateCourse", 
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
		}
	},
  	created() {
    	this.fetchTutor(this.tutorId);
  	}, 
  	methods: {
    ...mapActions({
      fetchTutor: "tutors/FETCH_TUTOR"
	})
  }
}


		
</script>