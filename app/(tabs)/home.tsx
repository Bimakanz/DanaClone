import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EyeOff, Eye } from 'lucide-react-native'


export default function home() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [balanceVisible, setBalanceVisible] = useState(true);

    const toggleBalanceVisibility = () => {
        setBalanceVisible(!balanceVisible);
    };

    return (
        <SafeAreaView style={{}}>
            <View
                style={{
                    backgroundColor: '#3F8CE2',
                    paddingHorizontal: 20,
                    paddingTop: 50,
                    paddingBottom: 160,
                    flexDirection: 'row'
                }}
            >
                {/* Top Bar */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={require('../../assets/images/image 2.svg')}
                        style={{
                            width: 25,
                            height: 25,
                            top: 2
                        }}
                    />
                </View>

                {/* Subtitle Text */}
                <View style={{ bottom:-1, left: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'lightgray', fontSize: 19 }}>
                        Rp
                    </Text>
                    <Text style={{ color: '#ffff', fontSize: 18, left: 4, minWidth: 60 }}>
                        {balanceVisible ? '67.000' : '  .  .  .  '}
                    </Text>

                    <TouchableOpacity onPress={toggleBalanceVisibility} style={{ marginLeft: 2 }}>
                        {balanceVisible ? <EyeOff size={20} color="#FFFFFF" /> : <Eye size={20} color="#FFFFFF" />}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', bottom: 120, justifyContent: 'space-around', right: 200 }}>

                <View
                    style={{
                        alignItems: 'center',
                        left: 200
                    }}
                >
                    <Image
                        source={require('../../assets/images/scan.svg')}
                        style={{
                            width: 35,
                            height: 35
                        }}
                    />
                    <Text style={{ color: '#FFFF' }}>
                        Scan
                    </Text>
                </View>

                <View
                    style={{
                        alignItems: 'center',
                        left: 200
                    }}
                >
                    <Image
                        source={require('../../assets/images/card-add2.svg')}
                        style={{
                            width: 35,
                            height: 35,

                        }}
                    />
                    <Text style={{ color: '#FFFF' }}>
                        Top Up
                    </Text>
                </View>

                <View
                    style={{
                        alignItems: 'center',
                        left: 200
                    }}
                >
                    <Image
                        source={require('../../assets/images/card-send.svg')}
                        style={{
                            width: 35,
                            height: 35
                        }}
                    />
                    <Text style={{ color: '#FFFF' }}>
                        Send
                    </Text>
                </View>

                <View
                    style={{
                        alignItems: 'center',
                        left: 200
                    }}
                >
                    <Image
                        source={require('../../assets/images/card-receive.svg')}
                        style={{
                            width: 35,
                            height: 35
                        }}
                    />
                    <Text style={{ color: '#FFFF' }}>
                        Request
                    </Text>
                </View>
            </View>

            <View
                style={{
                    backgroundColor: '#FFF',
                    borderRadius: 10,
                    padding: 2,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    bottom: 100,
                    width: 350,
                    left: 20
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>

                    {/* ICON MEDAL */}
                    <View
                        style={{
                            padding: 15,
                            borderRadius: 12,
                            marginRight: 14,
                        }}>
                        <Image
                            source={require('../../assets/images/image 4.svg')}
                            style={{
                                width: 50,
                                height: 50
                            }}
                        />

                    </View>


                    <View style={{ flex: 1, top: 5, right: 10 }}>
                        {/* Row: Gold & Points */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>Diskon s.d 40% !!</Text>

                            <View style={{ top: 10 }}>
                                <TouchableOpacity style={{ backgroundColor: '#3F8CE2', padding: 10, borderRadius: 5, paddingHorizontal: 20 }}>
                                    <Text style={{ color: '#ffff' }}>
                                        AMBIL
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Subtitle */}
                        <Text
                            style={{
                                fontSize: 13,
                                color: '#f0943a',
                                bottom: 5
                            }}
                        >
                            Yuk Belanja Di Lazada
                        </Text>


                    </View>

                </View>

                {/* Grid Layout - 2 rows of 4 items each */}
                <View style={{ flexDirection: 'column', bottom: 10, left: 1, right: 100 }}>
                    {/* First row - 4 items */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30, top: 20 }}>
                        {/* Item 1 */}
                        <View style={{ alignItems: 'center', width: 80 }}>
                            <Image
                                source={require('../../assets/images/image 5.svg')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 10
                                }}
                            />
                            <Text style={{ color: '#000000', marginTop: 5, fontSize: 12, textAlign: 'center' }}>
                                Voucher A+ Rewards
                            </Text>
                        </View>

                        {/* Item 2 */}
                        <View style={{ alignItems: 'center', width: 80 }}>
                            <Image
                                source={require('../../assets/images/image 6.svg')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 10
                                }}
                            />
                            <Text style={{ color: 'black', marginTop: 5, fontSize: 12, textAlign: 'center' }}>
                                Emas
                            </Text>
                        </View>

                        {/* Item 3 */}
                        <View style={{ alignItems: 'center', width: 80 }}>
                            <Image
                                source={require('../../assets/images/image 7.svg')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 10
                                }}
                            />
                            <Text style={{ color: 'black', marginTop: 5, fontSize: 12, textAlign: 'center' }}>
                                DANA Kaget
                            </Text>
                        </View>

                        {/* Item 4 */}
                        <View style={{ alignItems: 'center', width: 80 }}>
                            <Image
                                source={require('../../assets/images/image 8.svg')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 10
                                }}
                            />
                            <Text style={{ color: 'black', marginTop: 5, fontSize: 12, textAlign: 'center' }}>
                                Saldo Digital
                            </Text>
                        </View>
                    </View>

                    {/* Second row - 4 items */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {/* Item 5 */}
                        <View style={{ alignItems: 'center', width: 80 }}>
                            <Image
                                source={require('../../assets/images/image 9.svg')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 10
                                }}
                            />
                            <Text style={{ color: 'black', marginTop: 5, fontSize: 12, textAlign: 'center' }}>
                                DANA Deals
                            </Text>
                        </View>

                        {/* Item 6 */}
                        <View style={{ alignItems: 'center', width: 80 }}>
                            <Image
                                source={require('../../assets/images/image 10.svg')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 10
                                }}
                            />
                            <Text style={{ color: 'black', marginTop: 5, fontSize: 12, textAlign: 'center' }}>
                                Games
                            </Text>
                        </View>

                        {/* Item 7 */}
                        <View style={{ alignItems: 'center', width: 80 }}>
                            <Image
                                source={require('../../assets/images/image 11.svg')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 10
                                }}
                            />
                            <Text style={{ color: 'black', marginTop: 5, fontSize: 12, textAlign: 'center' }}>
                                DANA Goals
                            </Text>
                        </View>

                        {/* Item 8 */}
                        <View style={{ alignItems: 'center', width: 80 }}>
                            <Image
                                source={require('../../assets/images/image 12.svg')}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 10
                                }}
                            />
                            <Text style={{ color: 'black', marginTop: 5, fontSize: 12, textAlign: 'center' }}>
                                View All
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false} style={{ bottom: 90, padding: 20, }}>
                <View style={{marginRight:10}}>
                    <Image
                        source={require('../../assets/images/Rectangle 33.svg')}
                        style={{
                            width: 340,
                            height: 150,
                            borderRadius: 10,
                        }}
                    />
                </View>
                <View style={{marginRight:10}}>
                    <Image
                        source={require('../../assets/images/Rectangle 31.svg')}
                        style={{
                            width: 340,
                            height: 150,
                            borderRadius: 10,
                        }}
                    />
                </View>
                <View style={{marginRight:10}}>
                    <Image
                        source={require('../../assets/images/Rectangle 32.svg')}
                        style={{
                            width: 340,
                            height: 150,
                            borderRadius: 10,
                        }}
                    />
                </View>
            </ScrollView>



        </SafeAreaView>

    )
}