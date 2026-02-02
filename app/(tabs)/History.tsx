import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeft } from 'lucide-react-native'
import { router } from 'expo-router'

export default function History() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <View
                    style={{
                        backgroundColor: '#3F8CE2',
                        paddingHorizontal: 20,
                        paddingTop: 50,
                        paddingBottom: 80,
                        flexDirection: 'row'
                    }}
                >
                    <TouchableOpacity onPress={() => router.push('/home')} style={{ bottom: 20 }}>
                        <ChevronLeft color={'white'} size={30} />
                    </TouchableOpacity>

                    <Text style={{ color: 'white', bottom: 18, left: 80, fontSize: 16 }}>
                        History Transactions
                    </Text>

                </View>

                {/* In Progress and Completed Tabs */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 20,
                        marginTop: 0,
                        backgroundColor: '#4874a3ff', // background biru muda
                        borderRadius: 10,
                        padding: 2, // jarak biar tombol ngambang
                        bottom:60
                    }}
                >

                    {/* In Progress */}
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            paddingVertical: 12,
                            alignItems: 'center',
                            borderRadius: 12,
                        }}
                    >
                        <Text style={{ color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>
                            In Progress
                        </Text>
                    </TouchableOpacity>

                    {/* Completed (aktif) */}
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            paddingVertical: 12,
                            alignItems: 'center',
                            borderRadius: 10,
                            backgroundColor: '#66B2FF', // yang aktif lebih terang

                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: '500' }}>
                            Completed
                        </Text>
                    </TouchableOpacity>
                </View>


                {/* Transaction History List */}
                <View style={{
                    marginHorizontal: 20,
                    marginTop: 20,
                }}>
                    {/* Sample Transaction Items */}
                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2
                    }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: '#e8f5e9',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 12
                        }}>
                            <Text style={{ color: '#4caf50', fontWeight: 'bold', top:-2  }}>+</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16 }}>Top Up Dana</Text>
                            <Text style={{ color: '#888', fontSize: 14 }}>Today, 14:30</Text>
                        </View>
                        <Text style={{ color: '#4caf50', fontWeight: 'bold', fontSize: 16 }}>+Rp 100.000</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2
                    }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: '#ffebee',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 12
                        }}>
                            <Text style={{ color: '#f44336', fontWeight: 'bold', top:-2 }}>-</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16 }}>Top Up WDP</Text>
                            <Text style={{ color: '#888', fontSize: 14 }}>Today, 12:45</Text>
                        </View>
                        <Text style={{ color: '#f44336', fontWeight: 'bold', fontSize: 16 }}>-Rp 56.000</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2
                    }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: '#e8f5e9',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 12
                        }}>
                            <Text style={{ color: '#4caf50', fontWeight: 'bold', top:-2  }}>+</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16 }}>Gaji Bulanan</Text>
                            <Text style={{ color: '#888', fontSize: 14 }}>Yesterday, 09:15</Text>
                        </View>
                        <Text style={{ color: '#4caf50', fontWeight: 'bold', fontSize: 16 }}>+Rp 5.000.000</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2
                    }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: '#ffebee',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 12
                        }}>
                            <Text style={{ color: '#f44336', fontWeight: 'bold', top:-2  }}>-</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16 }}>Tagihan Listrik</Text>
                            <Text style={{ color: '#888', fontSize: 14 }}>Feb 1, 16:20</Text>
                        </View>
                        <Text style={{ color: '#f44336', fontWeight: 'bold', fontSize: 16 }}>-Rp 120.000</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2
                    }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: '#e8f5e9',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 12
                        }}>
                            <Text style={{ color: '#4caf50', fontWeight: 'bold', top:-2  }}>+</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16 }}>Pak Rafli</Text>
                            <Text style={{ color: '#888', fontSize: 14 }}>Jan 30, 11:30</Text>
                        </View>
                        <Text style={{ color: '#4caf50', fontWeight: 'bold', fontSize: 16 }}>+Rp 75.000</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2
                    }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: '#e8f5e9',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 12
                        }}>
                            <Text style={{ color: '#4caf50', fontWeight: 'bold', top:-2  }}>+</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16 }}>Scamming Company</Text>
                            <Text style={{ color: '#888', fontSize: 14 }}>Jan 30, 11:30</Text>
                        </View>
                        <Text style={{ color: '#4caf50', fontWeight: 'bold', fontSize: 16 }}>+Rp 75.000</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2
                    }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: '#e8f5e9',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 12
                        }}>
                            <Text style={{ color: '#4caf50', fontWeight: 'bold', top:-2  }}>+</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16 }}>Scamming Company</Text>
                            <Text style={{ color: '#888', fontSize: 14 }}>Jan 30, 11:30</Text>
                        </View>
                        <Text style={{ color: '#4caf50', fontWeight: 'bold', fontSize: 16 }}>+Rp 75.000</Text>
                    </View>

                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2
                    }}>
                        <View style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: '#e8f5e9',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 12
                        }}>
                            <Text style={{ color: '#4caf50', fontWeight: 'bold', top:-2  }}>+</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: '600', fontSize: 16 }}>Dari Romo</Text>
                            <Text style={{ color: '#888', fontSize: 14 }}>Jan 30, 11:30</Text>
                        </View>
                        <Text style={{ color: '#4caf50', fontWeight: 'bold', fontSize: 16 }}>+Rp 75.000</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}