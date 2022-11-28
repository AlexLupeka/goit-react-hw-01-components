import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsPersentage,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem
            key={stat.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <StatisticsLabel>{stat.label}</StatisticsLabel>
            <StatisticsPersentage>{`${stat.percentage}%`}</StatisticsPersentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsContainer>
  );
};

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};
