import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Pagination = ({ totalPage = 0, getCurrentPage = () => {} }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCurrentPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalPage]);

  if (totalPage < 1) return null;

  const renderPages = () => {
    if (totalPage <= 5) {
      return [...Array(totalPage).keys()].map((page) => (
        <TouchableOpacity
          key={page}
          style={[
            styles.pageButton,
            currentPage === page + 1 && styles.activePageButton
          ]}
          onPress={() => setCurrentPage(page + 1)}
        >
          <Text
            style={[
              styles.pageText,
              currentPage === page + 1 && styles.activePageText
            ]}
          >
            {page + 1}
          </Text>
        </TouchableOpacity>
      ));
    } else {
      let pagesToShow = [];
      if (currentPage < 5) {
        pagesToShow = [1, 2, 3, 4, 5, 'more', totalPage];
      } else if (currentPage > totalPage - 4) {
        pagesToShow = [
          1,
          'more',
          totalPage - 4,
          totalPage - 3,
          totalPage - 2,
          totalPage - 1,
          totalPage,
        ];
      } else {
        pagesToShow = [
          1,
          'more',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          'more',
          totalPage,
        ];
      }

      return pagesToShow.map((page, index) => {
        if (page === 'more') {
          return (
            <View key={page + index} style={styles.moreButton}>
              <Text style={styles.pageText}>...</Text>
            </View>
          );
        } else {
          return (
            <TouchableOpacity
              key={page + index}
              style={[
                styles.pageButton,
                currentPage === page && styles.activePageButton
              ]}
              onPress={() => setCurrentPage(page)}
            >
              <Text
                style={[
                  styles.pageText,
                  currentPage === page && styles.activePageText
                ]}
              >
                {page}
              </Text>
            </TouchableOpacity>
          );
        }
      });
    }
  };

  return (
    totalPage > 1 && (
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          onPress={() => setCurrentPage((prevPage) => (prevPage - 1 > 0 ? prevPage - 1 : prevPage))}
          style={[
            styles.navButton,
            currentPage === 1 && styles.disabledNavButton
          ]}
        >
          <Text style={styles.navText}>{"<"}</Text>
        </TouchableOpacity>
        {renderPages()}
        <TouchableOpacity
          onPress={() => setCurrentPage((prevPage) => (prevPage + 1 <= totalPage ? prevPage + 1 : prevPage))}
          style={[
            styles.navButton,
            currentPage === totalPage && styles.disabledNavButton
          ]}
        >
          <Text style={styles.navText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
  },
  pageButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b2b2b2',
    borderRadius: 5,
    marginHorizontal: 2,
  },
  activePageButton: {
    backgroundColor: '#6aa7fc',
    borderColor: '#6aa7fc',
  },
  pageText: {
    color: 'gray',
  },
  activePageText: {
    color: 'white',
  },
  navButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b2b2b2',
    borderRadius: 5,
    marginHorizontal: 2,
  },
  disabledNavButton: {
    borderColor: 'gray',
  },
  navText: {
    color: 'gray',
  },
  moreButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
});

export default Pagination;
