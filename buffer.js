            <Grid
                container
            >
                <Grid item>
                            
                </Grid>
                <Grid item>

                </Grid>
            
            </Grid>


            import React from 'react';

            function App() {
  const isBackgroundRed = true;

  return (
    <div
      style={{
        backgroundColor: isBackgroundRed ? 'red' : 'blue',
      }}
    />
  );
}

axios.get('http://localhost:8080/api/user/getposts',{headers: {
            'Content-Type': 'application/json',
        }})
        .then(res=>{
            console.log("user id is ");
            console.log(res.data)
            this.setState({posts:res.data})
            
        }).catch(err=>{
            console.log(err);
        })
----------------------------------

            <Grid 
                container 
            >
                {/* <Grid item xs={4} >
                    <Container>
                        <div style={{marginTop:'50px'}}>
                            <Paper style={styles.paperContainer}></Paper>
                        </div>
                    </Container>
                </Grid> */}
                <Grid item xs={8}>


                <Form>
                window.location.replace("http://www.w3schools.com");

=======================
chartData:{
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets:[
            {
                label:'Population',
                data:[
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
                ],
                backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
                ]
            }
            ]
        }
        });