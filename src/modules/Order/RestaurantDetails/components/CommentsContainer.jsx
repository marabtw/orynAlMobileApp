import { useEffect, useState } from "react"
import { View, Text, ScrollView, Image, StyleSheet } from "react-native"
import { axios } from "@lib/axios"

import { getRestaurantReviewsRequest } from "@modules/Order/api"
import { useToast } from "@hooks/useToast"
import { isObjectEqual } from "@utils/index"

import avatarIcon from "@assets/images/avatarIcon.jpeg"
import RatingStars from "@components/RatingStars/RatingStars"

const CommentsContainer = ({ restaurantId }) => {
  const showNotification = useToast()

  const [comments, setComments] = useState([])

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()
    getRestaurantReviewsRequest({
      restaurantId,
      cancelToken: cancelTokenSource.token,
    })
      .then(({ data }) => {
        if (!isObjectEqual(data, comments)) setComments(data)
      })
      .catch((err) => {
        setComments([])
        showNotification(`Не удалось загрузит отзывы: ${err}`, "error")
      })

    return () => {
      cancelTokenSource.cancel()
    }
  }, [restaurantId])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Отзывы</Text>
      <ScrollView style={styles.commentsContainer}>
        {comments?.length > 0 ? (
          comments.map((comment) => (
            <View key={comment.id} style={styles.comment}>
              <Image source={avatarIcon} style={styles.avatar} />
              <View style={styles.commentDetails}>
                <View style={styles.commentHeader}>
                  <Text style={styles.name}>{comment.name}</Text>
                  <Text style={styles.date}>{comment.date}</Text>
                </View>
                <RatingStars rate={comment.rate} />
                <Text style={styles.commentText}>{comment.comment}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noCommentsText}>Комментарии не найдены</Text>
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
		marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#FDFDFD",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.35,
    shadowRadius: -17,
    elevation: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
		marginBottom: 5,
    textAlign: "center",
  },
  commentsContainer: {
    maxHeight: 360,
  },
  comment: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f1f1f1",
    borderRadius: 14,
  },
  avatar: {
    width: 37,
    height: 37,
    borderRadius: 18.5,
    marginRight: 10,
  },
  commentDetails: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 27,
  },
  date: {
    fontSize: 14,
    color: "#979797",
    lineHeight: 21,
  },
  commentText: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
    fontSize: 14,
    lineHeight: 21,
  },
  noCommentsText: {
    textAlign: "center",
    fontSize: 12,
    lineHeight: 15,
  },
})

export default CommentsContainer
