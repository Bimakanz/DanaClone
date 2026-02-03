import {
    View, Text, TextInput, TouchableOpacity, Image, ScrollView, Modal
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Plus } from 'lucide-react-native'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { router } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function Wallet() {
    const [modalVisible, setModalVisible] = useState(false)
    const [summaryVisible, setSummaryVisible] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState('')
    const [recipientName, setRecipientName] = useState('')
    const [amount, setAmount] = useState('')

    // ======================
    // FORMAT UANG
    // ======================
    const formatNumber = (input: string) => {
        const cleaned = input.replace(/\D/g, '')
        return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }

    // ======================
    // FORMAT NOMOR TELEPON
    // ======================
    const formatPhoneNumber = (input: string) => {
        // Hapus semua karakter non-digit
        const cleaned = input.replace(/\D/g, '');

        // Batasi panjang maksimal nomor telepon (misalnya 13 digit untuk Indonesia)
        const maxLength = 13;
        const truncated = cleaned.substring(0, maxLength);

        // Tambahkan spasi setiap 4 digit
        const formatted = truncated.replace(/(\d{4})(?=\d)/g, '$1 ');

        return formatted;
    }

    const handleAmountChange = (text: string) => {
        const numeric = text.replace(/\D/g, '')
        setAmount(formatNumber(numeric))
    }

    const handlePhoneChange = (text: any) => {
        const formatted = formatPhoneNumber(text);
        setPhoneNumber(formatted);
    }

    // ======================
    // KIRIM
    // ======================
    const handleSendTransfer = () => {
        // Hapus spasi dari nomor telepon sebelum validasi dan pengiriman
        const cleanPhoneNumber = phoneNumber.replace(/\s/g, '');

        if (!cleanPhoneNumber || !recipientName || !amount) return

        setModalVisible(false)

        // buka rangkuman
        setTimeout(() => {
            setSummaryVisible(true)
        }, 200)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>

                {/* HEADER */}
                <View
                    style={{
                        backgroundColor: '#3F8CE2',
                        paddingHorizontal: 20,
                        paddingTop: 50,
                        paddingBottom: 30,
                        flexDirection: 'row',
                        alignItems: 'center'

                    }}
                >


                    <Image
                        source={require('../../assets/images/image 2.svg')}
                        style={{
                            width: 30,
                            height: 30,
                            bottom: 20
                        }}
                    />

                    <Text
                        style={{
                            flex: 1,
                            borderRadius: 20,
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            color: 'white',
                            left: 100,
                            bottom: 20,
                            fontSize: 20
                        }}> Wallet
                    </Text>

                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        style={{
                            backgroundColor: '#66B2FF',
                            width: 30,
                            height: 30,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            bottom: 20
                        }}
                    >
                        <Plus color="white" size={25} />    
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column', bottom: 40, left: 20, right: 100 }}>
                    {/* First row - 4 items */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30, top: 20 }}>
                        <TextInput
                            placeholder="Look for your Bank name here"
                            placeholderTextColor="gray"
                            style={{
                                backgroundColor: '#F6F9FF',
                                borderRadius: 5,
                                padding: 14,
                                paddingLeft: 30, // Added extra left padding
                                marginBottom: 20,
                                width: 350,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                                elevation: 3
                            }}
                        />

                    </View>
                </View>
            </ScrollView>

            <View>
                {/* IMAGE */}
                <Image
                    source={require('../../assets/images/walletttt.png')}
                    style={{
                        width: 400,
                        height: 450,
                        borderRadius: 12,
                        bottom: 20
                    }}
                />
            </View>

            <Modal transparent animationType="slide" visible={modalVisible}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        backgroundColor: 'rgba(0,0,0,0.45)'
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'white',
                            padding: 22,
                            borderTopLeftRadius: 28,
                            borderTopRightRadius: 28
                        }}
                    >

                        {/* HANDLE ATAS */}
                        <View
                            style={{
                                width: 50,
                                height: 5,
                                backgroundColor: '#ddd',
                                borderRadius: 10,
                                alignSelf: 'center',
                                marginBottom: 18
                            }}
                        />

                        {/* TITLE */}
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginBottom: 20
                            }}
                        >
                            Kirim Uang
                        </Text>

                        {/* INPUT */}
                        <TextInput
                            placeholder="Nomor telepon"
                            value={phoneNumber}
                            onChangeText={handlePhoneChange}
                            style={{
                                backgroundColor: '#F6F9FF',
                                borderRadius: 12,
                                padding: 14,
                                marginBottom: 12
                            }}
                        />

                        <TextInput
                            placeholder="Nama penerima"
                            value={recipientName}
                            onChangeText={setRecipientName}
                            style={{
                                backgroundColor: '#F6F9FF',
                                borderRadius: 12,
                                padding: 14,
                                marginBottom: 12
                            }}
                        />

                        <TextInput
                            placeholder="Jumlah (Rp)"
                            value={amount}
                            onChangeText={handleAmountChange}
                            keyboardType="numeric"
                            style={{
                                backgroundColor: '#F6F9FF',
                                borderRadius: 12,
                                padding: 14,
                                marginBottom: 20
                            }}
                        />

                        {/* BUTTON ROW */}
                        <View style={{ flexDirection: 'row', gap: 10 }}>

                            {/* BACK */}
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={{
                                    flex: 1,
                                    paddingVertical: 14,
                                    borderRadius: 14,
                                    backgroundColor: '#eee',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ fontWeight: 'bold', color: '#444' }}>
                                    Kembali
                                </Text>
                            </TouchableOpacity>

                            {/* KIRIM */}
                            <TouchableOpacity
                                onPress={handleSendTransfer}
                                style={{
                                    flex: 1,
                                    paddingVertical: 14,
                                    borderRadius: 14,
                                    backgroundColor: '#3F8CE2',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                    Kirim
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </Modal>

            <Modal transparent animationType="fade" visible={summaryVisible}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.45)'
                    }}
                >

                    <View
                        style={{
                            width: '85%',
                            backgroundColor: 'white',
                            borderRadius: 24,
                            padding: 22,
                            alignItems: 'center',

                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 8 },
                            shadowOpacity: 0.25,
                            shadowRadius: 12,
                            elevation: 10
                        }}
                    >

                        {/* ICON BULAT */}
                        <View
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 35,
                                backgroundColor: '#E3F2FD',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 15
                            }}
                        >

                            <AntDesign name="check-circle" size={32} color="green" />
                        </View>

                        {/* TITLE */}
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: '700',
                                marginBottom: 4
                            }}
                        >
                            Transfer Berhasil
                        </Text>

                        <Text
                            style={{
                                color: '#777',
                                fontSize: 13,
                                marginBottom: 18
                            }}
                        >
                            Detail transaksi kamu
                        </Text>

                        {/* DETAIL BOX */}
                        <View
                            style={{
                                width: '100%',
                                backgroundColor: '#F6F9FF',
                                borderRadius: 14,
                                padding: 14,
                                marginBottom: 18,
                                alignItems: 'center'
                            }}
                        >
                            <FontAwesome name="user" size={24} color="#3F8CE2" />
                            <Text style={{ marginBottom: 6, fontWeight:'bold' }}>{recipientName}</Text>
                            <FontAwesome6 name="money-check-dollar" size={24} color="#3F8CE2" />
                            <Text style={{ fontWeight: 'bold' }}>
                                Rp {amount}
                            </Text>
                        </View>

                        {/* BUTTON */}
                        <TouchableOpacity
                            onPress={() => {
                                setSummaryVisible(false)
                                setPhoneNumber('')
                                setRecipientName('')
                                setAmount('')
                            }}
                            style={{
                                backgroundColor: '#3F8CE2',
                                width: '100%',
                                paddingVertical: 14,
                                borderRadius: 14,
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                Konfirmasi
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>


        </SafeAreaView>
    )
}
