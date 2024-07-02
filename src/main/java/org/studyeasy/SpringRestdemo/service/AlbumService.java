package org.studyeasy.SpringRestdemo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.studyeasy.SpringRestdemo.model.Album;
import org.studyeasy.SpringRestdemo.repository.AlbumRepository;


@Service
public class AlbumService {

    @Autowired
    private AlbumRepository albumRepository;

    public Album save(Album album){
        return albumRepository.save(album);
    }
    
    public List<Album> findByAccount_id(long id){
        return albumRepository.findByAccount_id(id);
    }


    public Optional<Album> findById(long id){
        return albumRepository.findById(id);
    }

    public void deleteAlbum(Album album){
        albumRepository.delete(album);
    }
}
