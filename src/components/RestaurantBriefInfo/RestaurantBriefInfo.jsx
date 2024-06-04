import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

import { Ionicons } from "@ui/icons/icons"
import { formatTimeString } from "@utils/index"

const RestaurantBriefInfo = ({ data }) => {
  const getService = (name) => {
    return (
      <View style={styles.serviceContainer}>
        <Image source={""} style={styles.serviceIcon} />
        <Text>{name}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Image source={{ uri: data?.icon?.route }} style={styles.image} />
          <Text style={styles.name}>{data?.name}</Text>
        </View>
        <Text style={styles.description}>{data?.description}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Ionicons name="call-outline" style={styles.infoBoxIcon} />
          <Text style={styles.infoBoxText}>
            {data?.phone ? data.phone : "+0 (000) 000 00 00"}
          </Text>
        </View>
        <View style={styles.infoBox}>
          <Ionicons name="time-outline" style={styles.infoBoxIcon} />
          <Text style={styles.infoBoxText}>{`${formatTimeString(
            data?.modeFrom
          )} - ${formatTimeString(data?.modeTo)}`}</Text>
        </View>
      </View>
      {data?.services?.length > 0 && (
        <View style={styles.servicesContainer}>
          {data.services.map((service) => (
            <View key={service.name} style={styles.serviceItem}>
              {service.image && (
                <Image
                  source={{ uri: service.image }}
                  style={styles.serviceIcon}
                />
              )}
              <Text style={styles.serviceText}>{service.name}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    gap: 15,
  },
  header: {
    flexDirection: "column",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 100,
    aspectRatio: "1/1",
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    color: "#999",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBox: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#599AFF",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 5,
  },
  infoBoxIcon: {
    fontSize: 16,
    color: "#fefefe",
  },
  infoBoxText: {
    fontSize: 12,
    color: "#fefefe",
  },

  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 5,
  },
  serviceItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#599AFF",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  serviceIcon: {
    width: 30,
    aspectRatio: "1",
    borderRadius: 15,
    marginRight: 10,
  },
  serviceText: {
    fontSize: 12,
    color: "#fefefe",
  },
})

export default RestaurantBriefInfo
