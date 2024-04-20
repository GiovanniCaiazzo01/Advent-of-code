use std::fs;

fn main() {
    let input = fs::read_to_string("./input.txt");

    match input {
        Ok(content) => {
            let mut array_of_number: Vec<char> = vec![];
            let mut final_array_of_number: Vec<Vec<char>> = vec![];
            let mut result: u32 = 0;

            for letter in content.chars() {
                let is_numeric_value: bool = letter.is_numeric();
                let is_end_of_the_line: bool = letter == '\n';

                if is_end_of_the_line {
                    if array_of_number.len() == 1 {
                        array_of_number.push(array_of_number[0]);
                    }

                    final_array_of_number.push(array_of_number.clone());
                    array_of_number.clear();
                    continue;
                }

                if is_numeric_value && array_of_number.len() == 2 {
                    array_of_number[1] = letter;
                } else if is_numeric_value {
                    array_of_number.push(letter);
                }
            }

            if array_of_number.len() == 1 {
                array_of_number.push(array_of_number[0]);
                final_array_of_number.push(array_of_number.clone());
                array_of_number.clear();
            }

            if array_of_number.len() == 1 {
                final_array_of_number.push(array_of_number.clone());
                array_of_number.clear();
            }

            for element in &final_array_of_number {
                let unified_char: String = element[0].to_string() + &element[1].to_string();
                result += unified_char.parse::<u32>().unwrap();
            }

            println!("il risultato finale e' => {}", result);
        }
        Err(error) => println!("An error occurred while reading the file: {}", error),
    }
}
