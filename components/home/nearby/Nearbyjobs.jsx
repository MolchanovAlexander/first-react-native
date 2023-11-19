
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from "expo-router";
import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('search', {
    query: "Java developer",

    num_pages: '1',
  })
  // data?.map((j) => {
  //   console.log(j.employer_logo);
  // })
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearbyjobs</Text>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((j) => (
            <NearbyJobCard
              key={j.job_id}
              job={j}
              handleNavigate={()=> router.push(`/job-details/${j.job_id}`)}
            />
          ))
        )}

      </View>
    </View>
  )
}

export default Nearbyjobs