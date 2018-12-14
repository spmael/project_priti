<template>
  	<div>
        <v-img
            src="https://bit.ly/2A05Ie7"
            aspect-ratio="1"
        ></v-img>
         <P>Tomoka</P>
        <div class="text-xs-center">
         <v-rating v-model="rating"></v-rating>
        </div>  
<v-data-table
    :items="Time"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
	</div>


</template>
<script>
  export default {
    data: () => ({
      rating: 4
    })
  }
  </script>
<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Time / Day of the week',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Monday', value: 'calories' },
          { text: 'Tuesday', value: 'fat' },
          { text: 'Wednesday', value: 'carbs' },
          { text: 'Thursday', value: 'protein' },
          { text: 'Friday', value: 'iron' }
        ],
        Time: [
          {
            value: false,
            name: '9:00-12:00',
            calories: "○",
            fat: "×",
            carbs: "○",
            protein: "×",
            iron: "○"
          },
          {
            value: false,
            name: '13:00-16:00',
            calories: "○",
            fat: "×",
            carbs: "○",
            protein: "×",
            iron: "○"
          },
          {
            value: false,
            name: '17:00-20:00',
            calories: "○",
            fat: "×",
            carbs: "○",
            protein: "×",
            iron: "○"
          },
        ]
      }
    }
  }
</script>
