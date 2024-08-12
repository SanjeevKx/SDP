package com.example.realestate.service;

import java.util.List;

import com.example.realestate.dto.request.SiteRequest;
import com.example.realestate.dto.response.SiteResponse;

public interface WebService {

    List<SiteResponse> getSiteData();

    String addSiteData(SiteRequest siteRequest);

    SiteResponse updateSiteData(SiteRequest siteRequest, Long id);

    String deleteSiteData(Long id);

}
