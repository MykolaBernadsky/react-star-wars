import React from 'react'
import { Card, Grid } from "semantic-ui-react";


export default function Planets({data}) {
  return (
    <React.Fragment>
      <h1>Planets</h1>
      <Grid columns={3}>
        {data.map((planets, index) => {
          return (
            <Grid.Column key={index}>
              <Card>
                <Card.Content>
                  <Card.Header>{planets.name}</Card.Header>
                  <Card.Description>
                    <strong>Climate: {planets.climate}</strong>
                    <strong>Diameter: {planets.diameter}</strong>
                    <br />
                    <strong>Population: {planets.population}</strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </React.Fragment>
  )
}
