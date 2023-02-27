import { useList } from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui';
import { 
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
 } from "components";

const Home = () => {
  const {data, isLoading, isError} =useList({
    resource: 'properties',
    config: {
      pagination:{
        pageSize:55
      }
    }
  })
  const latestProperties = data?.data ?? [];
  if (isLoading)return<Typography>Loading...</Typography>
  if(isError)return<Typography>Hang on we fixing..</Typography>
  return (
    <Box>
     <Typography fontSize={25} fontWeight={700} color="#11142D">
       Dashboard
      </Typography>  
      <Box mt="20px" display="flex"
       flexWrap="wrap" gap={4} >
        <PieChart 
        title="Properties for Sale"
        value={684}
        series={[75, 25]}
        colors={['#c71585', '#e4e8ef']}
        />
         <PieChart 
        title="Properties for Rent"
        value={550}
        series={[60, 40]}
        colors={['#00ffff', '#d3d3d3']}
        />
         <PieChart 
        title="Total customers"
        value={5684}
        series={[75, 25]}
        colors={['#c71585', '#d3d3d3']}
        />
         <PieChart 
        title="Properties of Cities"
        value={555}
        series={[75, 25]}
        colors={['#c71585', '#d3d3d3']}
        />
      </Box>
      <Stack mt="15" width="100%"
      direction={{ xs: 'column', lg: 'row' }}>
      <TotalRevenue/>
      <PropertyReferrals/>ß
      </Stack>
      <Box 
      flex={1}
      borderRadius="15px"
      padding="20px"
      bgcolor="#fcfcfcf"
      flexDirection="column"
      minWidth="100%"
      mt="25px"
      >
        <Typography fontSize={25} fontWeight={700} color='#11142d'>
          Latest Properties

        </Typography>
        <Box
           mt={2.5}
           sx={{ display: 'flex', flexWrap: 'wrap', gap: 4}}
         >    {latestProperties.map((property) => (
                  <PropertyCard
                  key={property._id}
                  id={property._id}
                  title={property._title}
                  location={property._location}
                  price={property._price}
                  photo={property.photo}
                  
                  />

         ))}  
         </Box>
      </Box>
    </Box>
  )
}

export default Home