import { Button, FormControl, Input, VStack } from 'native-base';

const ExampleScreen = () => {
  return (
    <VStack space={4}>
      <FormControl>
        <FormControl.Label>Informe seu nome:</FormControl.Label>
        <Input />
      </FormControl>

      <Button>Hello, Native Base!</Button>
    </VStack>
  );
};

export default ExampleScreen;
