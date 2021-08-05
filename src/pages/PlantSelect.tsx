import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { EnviromentButton,  } from '../components/EnviramentButton'
import styles from '../Styles/style'

import { Header } from '../components/Header'
import { PlantCardPrimary } from '../components/PlantCardPrimary'
import { Load } from '../components/load'

import api from '../services/api'
import colors from "../Styles/colors";



interface EnviromentProps {
    key: string;
    title: string;
}
interface PlantProps {
    id:string;
    name:string;
    about:string;
    water_tips:string;
    photo:string;
    environments:[string];
    frequency:{
        times:number;
        repeat_every:string;
    }
} 

export function PlantSelect(){
    const [enviroments, setEnvirtoments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [enviromentSelected, setEnviromentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, Setpage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loadedAll, setloadedAll] = useState(false);


   
    function handleEnviromentList(environment: string){
        setEnviromentSelected(environment);
        
        if(environment == 'all')
            return setFilteredPlants(plants);

        const filtered = plants.filter(plant => plant.environments.includes(environment)
        );

        setFilteredPlants(filtered);
    }

        async function fetchPlants(){
            const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=6`);

            if( !data )
                return setLoading(true);

            if( page >  1 ){
                setPlants(oldValue => [...oldValue, ...data ])
                setFilteredPlants(oldValue => [...oldValue, ...data ])
            
            }else{
                setPlants(data); 
                setFilteredPlants(data);
         }

         setLoading(false);
         setLoadingMore(false);
}

        function handleFetchMore(distance: number) {
            if(distance < 1 )
                return;

            setLoadingMore(true);
            Setpage(oldValue => oldValue + 1);
            fetchPlants();
        }

    useEffect(() => {
        async function fetchEnviroment(){
            const {data} = await api.get('plants_environments?_sort=title&_order=asc');
            setEnvirtoments([
                {
                    key: 'all',
                    title:'Todos'
                },
            ...data
            ]);
        }

        fetchEnviroment();
    },[])

    useEffect(() => {      
        fetchPlants(); 
    },[])
    
    if(loading)
    return <Load />
    return(
        <View style={styles.containerPlant}>
            <View style={styles.headerPlant}>
                <Header />
                <Text style={styles.titlePlant}>Em qual ambiente</Text>
                <Text style={styles.subtitlePlant}>Você quer colocar sua planta ?</Text>
            </View>
            <View style={styles.listPlant}>
                <FlatList
                    data={enviroments}
                    renderItem={({item}) => (
                        <EnviromentButton 
                            title={item.title}
                            active={item.key == enviromentSelected}
                            onPress={() => handleEnviromentList(item.key)}
                        />
                    )}   
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList} 
                />
            </View>

            <View style={styles.plants}>
                <FlatList 
                    data={filteredPlants}
                    renderItem={({item}) => (
                        <PlantCardPrimary data={item} /> 
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    onEndReachedThreshold={0.1}
                    onEndReached={({ distanceFromEnd }) => 
                        handleFetchMore(distanceFromEnd)
                    }
                    ListFooterComponent={
                        loadingMore ?
                        <ActivityIndicator color={colors.green} />
                        : <></>
                }
                />

            </View>

        </View>
    )
}