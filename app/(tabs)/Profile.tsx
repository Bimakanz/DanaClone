import { BadgePercent, BanknoteArrowDown, BanknoteArrowUp, ChevronRight, History, Info, Settings } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const DanaSimple = () => {
  const [phoneVisible, setPhoneVisible] = useState(true);

  // Fungsi untuk menyembunyikan nomor telepon
  const hidePhoneNumber = (number: string) => {
    if (!number || number.length < 4) return number;

    const firstTwo = number.substring(0, 2);
    const lastTwo = number.substring(number.length - 2);
    const middleHidden = '*'.repeat(number.length - 2);

    return `${firstTwo}${middleHidden}${lastTwo}`;
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#118EEA" barStyle="light-content" />

        {/* --- HEADER BIRU --- */}
        <View style={{ backgroundColor: '#118EEA', height: 160, padding: 20 }}>
          {/* Tombol Personal / Bisnis */}
          <View style={{ flexDirection: 'row', backgroundColor: '#0E7ACD', alignSelf: 'center', borderRadius: 8, padding: 3, marginBottom: 5 }}>
            <View style={{ backgroundColor: '#4CABEB', paddingVertical: 5, paddingHorizontal: 20, borderRadius: 5 }}><Text style={{ color: 'white', fontWeight: 'bold' }}>Personal</Text></View>
            <View style={{ paddingVertical: 5, paddingHorizontal: 20 }}><Text style={{ color: '#AEDBF0' }}>Bisnis</Text></View>
          </View>

          {/* Profil User */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }}
              style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#DDD' }}
            />
            <View style={{ marginLeft: 15,  }}>
              <TouchableOpacity
                style={{flexDirection:'row'}}
                onPress={() => setPhoneVisible(!phoneVisible)}
              >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                  {phoneVisible ? '085771006786' : hidePhoneNumber('085771006786')}
                </Text>
                <ChevronRight color={'white'}/>
              </TouchableOpacity>
              <View style={{ borderWidth: 1, borderColor: 'white', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 2, marginTop: 5, alignSelf: 'flex-start' }}>
                <Text style={{ color: 'white', fontSize: 10 }}>MY QR</Text>
              </View>
            </View>
          </View>
        </View>


        <View style={{ paddingBottom: 80 }}> {/* Padding bawah biar gak ketutup menu bawah */}

          {/* --- KOTAK MENU UTAMA (Card Putih Atas) --- */}
          <View style={{ backgroundColor: 'white', marginHorizontal: 15, marginTop: -20, borderRadius: 10, padding: 15, elevation: 3 }}>

            {/* Baris Ikon 4 Biji */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>

              {/* Menu 1: Balance */}
              <View style={{ alignItems: 'center', width: 70 }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/60/60484.png' }} style={{ width: 30, height: 30, tintColor: '#118EEA' }} />
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>Balance</Text>
                <Text style={{ fontSize: 10, color: '#118EEA' }}>Lets Top Up!</Text>
              </View>

              {/* Menu 2: Goals */}
              <View style={{ alignItems: 'center', width: 70 }}>
                <Feather name="target" size={30} color="red" />
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>Goals</Text>
                <Text style={{ fontSize: 10, color: '#118EEA' }}>Create Goals!</Text>
              </View>

              {/* Menu 3: Family */}
              <View style={{ alignItems: 'center', width: 70 }}>
                <MaterialIcons name="family-restroom" size={30} color="orange" />
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>Family</Text>
                <Text style={{ fontSize: 10, color: '#118EEA' }}>Lets Activate</Text>
              </View>

              {/* Menu 4: eMAS */}
              <View style={{ alignItems: 'center', width: 70 }}>
                <MaterialCommunityIcons name="gold" size={30} color="#F2B705" />
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 5 }}>eMAS</Text>
                <Text style={{ fontSize: 10, color: '#118EEA' }}>Start Investing</Text>
              </View>

            </View>

            {/* Garis Pembatas */}
            <View style={{ height: 1, backgroundColor: '#EEE', marginBottom: 15 }} />

            {/* Income & Expense */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <BanknoteArrowUp color={'green'} />
                <View style={{ left: 10 }}>
                  <Text style={{ fontSize: 10, color: 'gray' }}>Income</Text>
                  <Text style={{ fontWeight: 'bold' }}>Rp0</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <BanknoteArrowDown color={'brown'} />
                <View style={{ left: 10 }}>
                  <Text style={{ fontSize: 10, color: 'gray' }}>Expense</Text>
                  <Text style={{ fontWeight: 'bold' }}>Rp0</Text>
                </View>
              </View>
            </View>

          </View>

          {/* --- LIST MENU BAWAH --- */}
          <View style={{ backgroundColor: 'white', marginHorizontal: 15, marginTop: 15, borderRadius: 10, padding: 5, elevation: 2 }}>

            {/* My Bills */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#F5F5F5', justifyContent: 'space-between' }}>
              <History color={'orange'} />
              <Text style={{ fontSize: 14, fontWeight: '500', right: 100 }}>My Bills</Text>
              <Text style={{ color: '#CCC', fontSize: 30 }}>{'>'}</Text>
            </TouchableOpacity>

            {/* Voucher Promo */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#F5F5F5', justifyContent: 'space-between' }}>
              <BadgePercent color={'orange'} />
              <Text style={{ fontSize: 14, fontWeight: '500', right: 80 }}>Voucher Promo</Text>
              <Text style={{ color: '#CCC', fontSize: 30 }}>{'>'}</Text>
            </TouchableOpacity>

            {/* Settings */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#F5F5F5', justifyContent: 'space-between' }}>
              <Settings color={'#3F8CE2'} />
              <Text style={{ fontSize: 14, fontWeight: '500', right: 102 }}>Settings</Text>
              <Text style={{ color: '#CCC', fontSize: 30 }}>{'>'}</Text>
            </TouchableOpacity>

            {/* General Info */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderBottomColor: '#F5F5F5', justifyContent: 'space-between' }}>
              <Info color={'green'} />
              <Text style={{ fontSize: 14, fontWeight: '500', right: 90 }}>General Info</Text>
              <Text style={{ color: '#CCC', fontSize: 30 }}>{'>'}</Text>
            </TouchableOpacity>

            {/* Diana */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4233/4233839.png' }} style={{ width: 24, height: 24, marginRight: 15, tintColor: '#118EEA' }} />
              <View>
                <Text style={{ fontSize: 14, fontWeight: '500' }}>DIANA is here to help!</Text>
                <Text style={{ fontSize: 10, color: '#999' }}>Chat for assistance</Text>
              </View>
            </TouchableOpacity>

          </View>

          {/* Logout & Versi */}
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: '#CCC', marginBottom: 10 }}>Ver 2.112.0</Text>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'red', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 40, backgroundColor: 'white' }}>
              <Text style={{ color: 'red', fontWeight: 'bold' }}>LOGOUT</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default DanaSimple;