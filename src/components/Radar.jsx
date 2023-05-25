import { ResponsiveRadar } from '@nivo/radar'

export const MyResponsiveRadar = ({ location, data }) => (
    <ResponsiveRadar
        data={data}
        keys={[`${location}`]}
        indexBy="fuel"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'spectral' }}
        fillOpacity={0.5}
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: 'rgb(0 0 0)',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: 'rgb(0 0 0)'
                        }
                    }
                ]
            }
        ]}
    />
)


