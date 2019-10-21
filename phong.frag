#version 330 core
out vec4 color;

in vec3 FragPos;  
in vec3 Normal;  
  
uniform vec3 lightPos; 
uniform vec3 viewPos;
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    // TODO: Replace with your code...
    // If gl_Position was set correctly, this gives a totally red cube

	//Creates Diffuse Lighting via normalizing lightPos & FragPos, then getting the max of the normal & lightDir, then creating a vector out of that

	vec3 lightDir = normalize(lightPos - FragPos);
    vec3 normal = normalize(Normal);    
    float diffFloat = max(dot(normal, lightDir), 0.0);
    vec3 diffuseL = (diffFloat * lightColor);
    

    //Creates Ambient lighting via multiplying our declared ambientFloat by the declared lightColor vector 

    float ambientFloat = 0.1;
    vec3 ambientL = ambientFloat * lightColor;


    // Creates Specular lighting via normalizing the difference between viewPos and FragPos, then creates a vector reflectDirection via the reflect function
	// of the negative value of lightDir and normal

	// Then, we create out specularL vector by multiple our specularStr constant, our spec float, and our lightColor vector

	vec3 viewDirection = normalize(viewPos - FragPos);
    float specularStr = 0.5;    
    vec3 reflectDirection = reflect(-(lightDir), normal);
    float spec = pow(max(dot(viewDirection, reflectDirection), 0.0), 64);
    vec3 specularL = specularStr * spec * lightColor;


    //We then combine our Diffuse, Ambient, and Specular lighting on the cube

    vec3 result = (ambientL + diffuseL + specularL) * objectColor;

    
    //We then change our color to what's produced from the combination of our lighting

    color = vec4(result, 1.0f);
} 
