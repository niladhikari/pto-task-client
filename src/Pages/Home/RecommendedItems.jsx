import PropTypes from "prop-types";

const RecommendedItems = ({item}) => {
    console.log(4,item);
    return (
        <div>
            <h1></h1>
        </div>
    );
};

RecommendedItems.propTypes = {
    item: PropTypes.object,
  };

export default RecommendedItems;