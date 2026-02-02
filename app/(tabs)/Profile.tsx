import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

const DanaSimple = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <StatusBar backgroundColor="#118EEA" barStyle="light-content" />

      {/* --- HEADER BIRU --- */}
      <View style={styles.headerBiru}>
        {/* Tombol Personal / Bisnis */}
        <View style={styles.topSwitch}>
          <View style={styles.btnActive}><Text style={{color:'white', fontWeight:'bold'}}>Personal</Text></View>
          <View style={styles.btnInactive}><Text style={{color:'#AEDBF0'}}>Bisnis</Text></View>
        </View>

        {/* Profil User */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }} 
            style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#DDD' }} 
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>0812••••••60</Text>
            <View style={styles.btnQr}>
               <Text style={{ color: 'white', fontSize: 10 }}>MY QR</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 80 }}> {/* Padding bawah biar gak ketutup menu bawah */}

          {/* --- KOTAK MENU UTAMA (Card Putih Atas) --- */}
          <View style={styles.cardPutih}>
            
            {/* Baris Ikon 4 Biji */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
              
              {/* Menu 1: Balance */}
              <View style={{ alignItems: 'center', width: 70 }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/60/60484.png' }} style={{ width: 30, height: 30, tintColor: '#118EEA' }} />
                <Text style={styles.menuTitle}>Balance</Text>
                <Text style={styles.menuSub}>Top Up</Text>
              </View>

              {/* Menu 2: Goals */}
              <View style={{ alignItems: 'center', width: 70 }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2961/2961948.png' }} style={{ width: 30, height: 30 }} />
                <Text style={styles.menuTitle}>Goals</Text>
                <Text style={styles.menuSub}>Create!</Text>
              </View>

              {/* Menu 3: Family */}
              <View style={{ alignItems: 'center', width: 70 }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3320/3320958.png' }} style={{ width: 30, height: 30 }} />
                <Text style={styles.menuTitle}>Family</Text>
                <Text style={styles.menuSub}>Active!</Text>
              </View>

              {/* Menu 4: eMAS */}
              <View style={{ alignItems: 'center', width: 70 }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/8833/8833189.png' }} style={{ width: 30, height: 30 }} />
                <Text style={styles.menuTitle}>eMAS</Text>
                <Text style={styles.menuSub}>Invest</Text>
              </View>

            </View>

            {/* Garis Pembatas */}
            <View style={{ height: 1, backgroundColor: '#EEE', marginBottom: 15 }} />

            {/* Income & Expense */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/992/992900.png' }} style={{ width: 20, height: 20, tintColor: 'green', marginRight: 8 }} />
                <View>
                  <Text style={{ fontSize: 10, color: 'gray' }}>Income</Text>
                  <Text style={{ fontWeight: 'bold' }}>Rp0</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/992/992892.png' }} style={{ width: 20, height: 20, tintColor: 'orange', marginRight: 8 }} />
                <View>
                  <Text style={{ fontSize: 10, color: 'gray' }}>Expense</Text>
                  <Text style={{ fontWeight: 'bold' }}>Rp0</Text>
                </View>
              </View>
            </View>

          </View>

          {/* --- LIST MENU BAWAH --- */}
          <View style={styles.listContainer}>
            
            {/* My Bills */}
            <TouchableOpacity style={styles.barisMenu}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2382/2382625.png' }} style={styles.iconKecil} />
              <Text style={styles.teksMenu}>My Bills</Text>
              <Text style={{ color: '#CCC' }}>{'>'}</Text>
            </TouchableOpacity>

            {/* Voucher Promo */}
            <TouchableOpacity style={styles.barisMenu}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/879/879757.png' }} style={styles.iconKecil} />
              <Text style={styles.teksMenu}>Voucher Promo</Text>
              <Text style={{ color: '#CCC' }}>{'>'}</Text>
            </TouchableOpacity>

            {/* Settings */}
            <TouchableOpacity style={styles.barisMenu}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2040/2040504.png' }} style={[styles.iconKecil, {tintColor:'#118EEA'}]} />
              <Text style={styles.teksMenu}>Settings</Text>
              <Text style={{ color: '#CCC' }}>{'>'}</Text>
            </TouchableOpacity>

            {/* General Info */}
            <TouchableOpacity style={styles.barisMenu}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/471/471662.png' }} style={[styles.iconKecil, {tintColor:'green'}]} />
              <Text style={styles.teksMenu}>General Info</Text>
              <Text style={{ color: '#CCC' }}>{'>'}</Text>
            </TouchableOpacity>
            
            {/* Diana */}
            <TouchableOpacity style={styles.barisMenuNoBorder}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4233/4233839.png' }} style={[styles.iconKecil, {tintColor:'#118EEA'}]} />
              <View>
                <Text style={styles.teksMenu}>DIANA is here to help!</Text>
                <Text style={{ fontSize: 10, color: '#999' }}>Chat for assistance</Text>
              </View>
            </TouchableOpacity>

          </View>

          {/* Logout & Versi */}
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: '#CCC', marginBottom: 10 }}>Ver 2.112.0</Text>
            <TouchableOpacity style={styles.btnLogOut}>
              <Text style={{ color: 'red', fontWeight: 'bold' }}>LOGOUT</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

// Style sederhana biar rapi dikit
const styles = StyleSheet.create({
  headerBiru: {
    backgroundColor: '#118EEA',
    height: 160,
    padding: 20,
  },
  topSwitch: {
    flexDirection: 'row',
    backgroundColor: '#0E7ACD',
    alignSelf: 'center',
    borderRadius: 8,
    padding: 3,
    marginBottom: 5
  },
  btnActive: { backgroundColor: '#4CABEB', paddingVertical: 5, paddingHorizontal: 20, borderRadius: 5 },
  btnInactive: { paddingVertical: 5, paddingHorizontal: 20 },
  btnQr: { borderWidth: 1, borderColor: 'white', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 2, marginTop: 5, alignSelf: 'flex-start' },
  
  cardPutih: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: -40, // Ini yang bikin naik ke atas
    borderRadius: 10,
    padding: 15,
    elevation: 3
  },
  menuTitle: { fontSize: 12, fontWeight: 'bold', marginTop: 5 },
  menuSub: { fontSize: 10, color: '#118EEA' },

  listContainer: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 10,
    padding: 5,
    elevation: 2
  },
  barisMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
    justifyContent: 'space-between'
  },
  barisMenuNoBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  iconKecil: { width: 24, height: 24, marginRight: 15, tintColor: 'orange' },
  teksMenu: { fontSize: 14, fontWeight: '500' },

  btnLogOut: {
    borderWidth: 1, borderColor: 'red', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 40, backgroundColor: 'white'
  },

  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'white', height: 60, borderTopWidth: 1, borderColor: '#EEE'
  },
  boxNav: { width: 24, height: 24, alignItems: 'center', justifyContent: 'center' },
  textNav: { fontSize: 10, color: 'gray' }
});

export default DanaSimple;