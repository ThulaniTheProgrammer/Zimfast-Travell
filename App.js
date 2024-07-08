import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home/Home';
import Details from './src/pages/details/Details';
import OtpPage from './src/pages/otp-page/OtpPage';
import TourInfo from './src/pages/TourInfo/TourInfo';
import Mashwest from './src/components/Masvingoo/Masvingoprovince';
import Greatzim from './src/components/Masvingoo/Masvingo/Greatzim';
import Greatzimgps from './src/components/Masvingoo/Masvingo/Greatzimgps';
import Matebeland from './src/components/Matebeleland/Matebeleland';
import Manicaland from './src/components/Manicaland/Manicaland';
import Mashonaland from './src/components/Mashwest/Mashonaland';
import Victoriafalls from './src/components/Matebeleland/Victoriafalls';
import Victoriagps from './src/components/Matebeleland/Victoriagps';
import Cuthotel from './src/components/Mashwest/Cuthotel';
import Cuthotelgps from './src/components/Mashwest/Cuthotelgps';
import Caves from './src/components/Mashwest/Caves';
import Cavesgps from './src/components/Mashwest/Cavesgps';
import Mazvikadei from './src/components/Mashwest/Mazvikadei';
import Mazvikadegps from './src/components/Mashwest/Mazvikadeigps';
import Tm from './src/components/Mashwest/Tm';
import Tmgps from './src/components/Mashwest/Tmgps';
import Cut from './src/components/Mashwest/Cut';
import Cutgps from './src/components/Mashwest/Cutgps';
import Chickenin from './src/components/Masvingoo/Masvingo/chickenin';
import Chickeningps from './src/components/Masvingoo/Masvingo/chickeningps';
import Flamboyant from './src/components/Masvingoo/Masvingo/Flamboyant';
import Flamboyantgps from './src/components/Masvingoo/Masvingo/Flamboyantgps';
import Lake from './src/components/Masvingoo/Masvingo/Lake';
import Lakegps from './src/components/Masvingoo/Masvingo/Lakegps';
import Hippocrick from './src/components/Masvingoo/Masvingo/hippocrick';
import Hippocrickgps from './src/components/Masvingoo/Masvingo/hippocrickgps';
import Museumgps from './src/components/Masvingoo/Masvingo/Museumgps';
import Museum from './src/components/Masvingoo/Masvingo/Museum';
import Chevron from './src/components/Masvingoo/Masvingo/Chevron';
import Chevrongps from './src/components/Masvingoo/Masvingo/Chevrongps';
import Ivory from './src/components/Masvingoo/Masvingo/Ivory';
import Ivorygps from './src/components/Masvingoo/Masvingo/Ivorygps';
import Wild from './src/components/Matebeleland/Wild';
import Wildgps from './src/components/Matebeleland/Wildgps';
import Elephantgps from './src/components/Matebeleland/Elephantgps';
import Elephant from './src/components/Matebeleland/Elephant';
import Hwange from './src/components/Matebeleland/Hwange';
import Hwangegps from './src/components/Matebeleland/Hwangegps';
import Safari from './src/components/Matebeleland/Safari';
import Safarigps from './src/components/Matebeleland/Safarigps';
import Nyangani from './src/components/Manicaland/Nyangani';
import Nyanganigps from './src/components/Manicaland/Nyanganigps';
import Wordsview from './src/components/Manicaland/WordsView';
import Wordsviewgps from './src/components/Manicaland/WordsViewgps';
import Mtarazi from './src/components/Manicaland/Mtarazi';
import Mtarazigps from './src/components/Manicaland/Mtarazigps';
import Amenities from './src/components/Amenities';
import Activities from './src/components/Activities';
import Ancillary from './src/components/Ancillary';
import Popular from './src/components/Popular';
import Harare from './src/components/Harare/Harare';
import Joinacity from './src/components/Harare/Joinacity';
import Mukuvisi from './src/components/Harare/Mukuvisi';
import Lakechivero from './src/components/Harare/Joinacity';
import Lionpark from './src/components/Harare/Lionpark';
import Houses from './src/components/Accomodation/Accomodation';
import HouseDetail from './src/components/Accomodation/HouseDetail';







const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Details" component={Details} />
        <Stack.Screen options={{headerShown: false}} name="OtpPage" component={OtpPage} />
        <Stack.Screen options={{headerShown: false}} name="TourInfo" component={TourInfo} />
        <Stack.Screen options={{headerShown: false}} name="Mashwest" component={Mashwest} />
        <Stack.Screen options={{headerShown: false}} name="Greatzim" component={Greatzim} />
        <Stack.Screen options={{headerShown: false}} name="Greatzimgps" component={Greatzimgps} />
        <Stack.Screen options={{headerShown: false}} name="Matebeland" component={Matebeland} />
        <Stack.Screen options={{headerShown: false}} name="Manicaland" component={Manicaland} />
        <Stack.Screen options={{headerShown: false}} name="Mashonaland" component={Mashonaland} />
        <Stack.Screen options={{headerShown: false}} name="Victoriafalls" component={Victoriafalls} />
        <Stack.Screen options={{headerShown: false}} name="Victoriagps" component={Victoriagps} />
        <Stack.Screen options={{headerShown: false}} name="Cuthotel" component={Cuthotel} />
        <Stack.Screen options={{headerShown: false}} name="Cuthotelgps" component={Cuthotelgps} />
        <Stack.Screen options={{headerShown: false}} name="Caves" component={Caves} />
        <Stack.Screen options={{headerShown: false}} name="Cavesgps" component={Cavesgps} />
        <Stack.Screen options={{headerShown: false}} name="Mazvikadei" component={Mazvikadei} />
        <Stack.Screen options={{headerShown: false}} name="Mazvikadegps" component={Mazvikadegps} />
        <Stack.Screen options={{headerShown: false}} name="Tm" component={Tm} />
        <Stack.Screen options={{headerShown: false}} name="Tmgps" component={Tmgps} />
        <Stack.Screen options={{headerShown: false}} name="Cut" component={Cut} />
        <Stack.Screen options={{headerShown: false}} name="Cutgps" component={Cutgps} />
        <Stack.Screen options={{headerShown: false}} name="Chickenin" component={Chickenin} />
        <Stack.Screen options={{headerShown: false}} name="Chickeningps" component={Chickeningps} />
        <Stack.Screen options={{headerShown: false}} name="Flamboyant" component={Flamboyant} />
        <Stack.Screen options={{headerShown: false}} name="Flamboyantgps" component={Flamboyantgps} />     
        <Stack.Screen options={{headerShown: false}} name="Lake" component={Lake} />
        <Stack.Screen options={{headerShown: false}} name="Lakegps" component={ Lakegps} />
        <Stack.Screen options={{headerShown: false}} name="Hippocrick" component={Hippocrick} />
        <Stack.Screen options={{headerShown: false}} name="Hippocrickgps" component={Hippocrickgps} />
        <Stack.Screen options={{headerShown: false}} name="Museumgps" component={Museumgps} />
        <Stack.Screen options={{headerShown: false}} name="Museum" component={Museum} />
        <Stack.Screen options={{headerShown: false}} name="Chevron" component={Chevron} />
        <Stack.Screen options={{headerShown: false}} name="Chevrongps" component={Chevrongps} />
        <Stack.Screen options={{headerShown: false}} name="Ivory" component={Ivory} />
        <Stack.Screen options={{headerShown: false}} name="Ivorygps" component={Ivorygps} />
        <Stack.Screen options={{headerShown: false}} name="Wild" component={Wild} />
        <Stack.Screen options={{headerShown: false}} name="Wildgps" component={Wildgps} />
        <Stack.Screen options={{headerShown: false}} name="Elephantgps" component={Elephantgps} />
        <Stack.Screen options={{headerShown: false}} name="Elephant" component={Elephant} />
        <Stack.Screen options={{headerShown: false}} name="Hwange" component={Hwange} />
        <Stack.Screen options={{headerShown: false}} name="Hwangegps" component={Hwangegps} />
        <Stack.Screen options={{headerShown: false}} name="Safari" component={Safari} />
        <Stack.Screen options={{headerShown: false}} name="Safarigps" component={Safarigps} />
        <Stack.Screen options={{headerShown: false}} name="Nyangani" component={Nyangani} />
        <Stack.Screen options={{headerShown: false}} name="Nyanganigps" component={Nyanganigps} />
        <Stack.Screen options={{headerShown: false}} name="Wordsview" component={Wordsview} />
        <Stack.Screen options={{headerShown: false}} name="Wordsviewgps" component={Wordsviewgps} />
        <Stack.Screen options={{headerShown: false}} name="Amenities" component={Amenities} />
        <Stack.Screen options={{headerShown: false}} name="Activities" component={Activities} />
        <Stack.Screen options={{headerShown: false}} name="Ancillary" component={Ancillary} />
        <Stack.Screen options={{headerShown: false}} name="Popular" component={Popular} />
        <Stack.Screen options={{headerShown: false}} name="Harare" component={Harare} />
        <Stack.Screen options={{headerShown: false}} name="Joinacity" component={Joinacity} />
        <Stack.Screen options={{headerShown: false}} name="Mukuvisi" component={Mukuvisi} />
        <Stack.Screen options={{headerShown: false}} name="Lakechivero" component={Lakechivero} />
        <Stack.Screen options={{headerShown: false}} name="Lionpark" component={Lionpark} />
        <Stack.Screen options={{headerShown: false}} name="Mtarazi" component={Mtarazi} />
        <Stack.Screen options={{headerShown: false}} name="Houses" component={Houses} />
        <Stack.Screen options={{headerShown: false}} name="HouseDetail" component={HouseDetail} />
       
        
        





       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
