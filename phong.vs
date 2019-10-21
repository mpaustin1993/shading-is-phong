
#version 330 core
layout (location = 0) in vec3 position;
layout (location = 1) in vec3 normal;

out vec3 Normal;
out vec3 FragPos;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
    // TODO: Your code here
    // Remember to set gl_Position (correctly) or you will get a black screen...

	//sets our output Vector FragPos to the vector created from our received model & position vector

    FragPos = vec3(model * vec4(position, 1.0));
    
	//sets our Normal vector to the transpose of the inverse of our received model, & multiplying it by our normal

	Normal = mat3(transpose(inverse(model))) * normal;
    
    // sets gl_Position to the product of our transformation matrices multiplied by our FragPos matrix
    gl_Position = (projection * view * model * vec4(FragPos, 1.0));
    
} 
